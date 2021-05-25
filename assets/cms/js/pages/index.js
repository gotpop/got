import about from './about';
import work from './work';


const pages = {
  name: 'pages',
  label: 'Pages',
  folder: "content/pages",
  // files: [about, work],
  // file: 'content/pages/_index.md',
  fields: [{
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: '',
      required: false,
    },
    {
      label: "Body",
      name: "body",
      widget: "markdown",
      required: false,
    }
  ]
}

export default pages;