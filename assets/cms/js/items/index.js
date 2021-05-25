
import menuMain from '../partials/menu.main';

const items = {
  label: 'Item',
  name: 'item',
  create: true,
  folder: 'content/items',
  file: 'content/items/_index.md',
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
          widget: "markdown"
      },
      menuMain
  ]
};

export default items;