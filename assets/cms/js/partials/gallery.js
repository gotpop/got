const gallery = {
    label: 'Gallery',
    name: 'gallery',
    widget: 'object',
    collapsed: false,
    fields: [
      {
        label: 'Title',
        name: 'title',
        widget: 'string',
        required: false,
      },
      {
        label: 'Header',
        name: 'header',
        widget: 'string',
        required: false,
      },
      {
        label: 'Content',
        name: 'content',
        widget: 'markdown',
        required: false,
      },
    ],
  }
  
  export default gallery