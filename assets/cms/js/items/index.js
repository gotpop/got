
import menuMain from '../partials/menuMain';
import smallHero from '../partials/smallHero';
import gallery from '../partials/gallery';

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
      {
        label: 'Sections',
        name: 'sections',
        widget: 'list',
        types: [smallHero, gallery],
      },
      menuMain
  ]
};

export default items;