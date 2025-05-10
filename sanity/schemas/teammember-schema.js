const teamMember = {
    name: 'teamMember', 
    title: 'Team Member', 
    type: 'document',
    fields: [
      {
        name: 'fullName',
        title: 'Full Name',
        type: 'string',
        description: 'The full name of the team member.',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'fullName' },
        description: 'A unique identifier for the member (auto-generated from full name).',
      },
      {
        name: 'talentPosition',
        title: 'Talent Position',
        type: 'string',
        description: 'The role or position of the team member (e.g., Director, Photographer).',
      },
      {
        name: 'city',
        title: 'City',
        type: 'string',
        description: 'The city where the team member is based.',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Enables image hotspot and crop tools
        },
        fields: [
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            description: 'Alternative text for accessibility.',
          },
        ],
        description: 'Image of the team member.',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'A brief description or bio of the team member (optional).',
      },
      {
        name: 'status',
        title: 'Status',
        type: 'boolean',
        description: 'Whether the team member is currently active or featured.',
      },
      // You can add more fields here, like social media links, etc.
    ],
    preview: {
      select: {
        title: 'fullName',
        subtitle: 'talentPosition',
        media: 'image',
      },
    },
  };
  
  export default teamMember;