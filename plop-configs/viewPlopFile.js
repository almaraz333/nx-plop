const { readdirSync } = require('fs');

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

module.exports = {
  description: 'Create a view',
  prompts: [
    {
      type: 'list',
      name: 'componentDestination',
      message: 'Where should this view be placed?',
      choices: () => [
        ...getDirectories('./apps').filter((choice) => !choice.includes('e2e')),
      ],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the views name?',
    },
  ],
  actions: (data) => {
    const pathPrefix = `./apps/${data.componentDestination}/src/app`;
    let actions = [
      {
        type: 'add',
        path: `${pathPrefix}/views/index.ts`,
        templateFile: 'plop-templates/index.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: `${pathPrefix}/views/{{ name}}/{{ name}}.tsx`,
        templateFile: 'plop-templates/View/view.js.hbs',
      },
      {
        type: 'add',
        path: `${pathPrefix}/views/{{ name}}/{{ name}}.module.scss`,
        templateFile: 'plop-templates/View/styles.scss.hbs',
      },
      {
        type: 'add',
        path: `${pathPrefix}/views/{{ name}}/index.ts`,
        templateFile: 'plop-templates/indexExport.js.hbs',
      },
      {
        type: 'add',
        path: `./apps/${data.componentDestination}-e2e/src/integration/{{ name}}/{{ name}}.spec.ts`,
        templateFile: 'plop-templates/View/view.spec.hbs',
      },
      {
        type: 'append',
        path: `${pathPrefix}/views/index.ts`,
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export { {{ name}} } from './{{ name}}';`,
      },
    ];

    return actions;
  },
};
