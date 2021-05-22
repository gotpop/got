const page = {
    file: 'content/work/_index.md',
    label: 'Work Page',
    name: 'work',
    fields: [
      {
        label: 'Layout',
        name: 'layout',
        widget: 'hidden',
        default: 'contact',
      },
      {
        label: 'Type',
        name: 'type',
        widget: 'hidden',
        default: 'page',
      },
      {
        label: 'Title',
        name: 'title',
        widget: 'string',
        default: '',
        required: false,
      }
    ],
  }
  
  export default page

