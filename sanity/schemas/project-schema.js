const project = {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'The name of the project.',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'name' },
        description: 'A unique identifier for the project, created from the title.',
      },
      {
        name: 'clientName',
        title: 'Client Name',
        type: 'string',
        description: 'The name of the client for this project.',
      },
      {
        name: 'projectYear',
        title: 'Project Year',
        type: 'string', // Or 'number' if you prefer
        description: 'The year the project was completed or launched.',
      },
      {
        name: 'projectDescription',
        title: 'Project Description',
        type: 'array',
        of: [{ type: 'block' }],
        description: 'A brief description of the project.',
      },
      {
        name: 'image',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            title: 'Main Image Alt',
            type: 'string',
          },
        ],
        description: 'The main image for the project.',
      },
      {
        name: 'projectImages',
        title: 'Project Images',
        type: 'array',
        of: [
          {
            type: 'image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                title: 'Alt Text',
                type: 'string',
              },
            ],
          },
        ],
        description: 'Additional images for the project.',
      },
      {
        name: 'url',
        title: 'URL',
        type: 'url',
      },
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'slug.current',
        media: 'image',
      },
    },
  };
  
  export default project;