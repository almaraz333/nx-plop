const { readdirSync } = require('fs');

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

module.exports = {
  description: 'Create a reusable component',
  prompts: [
    {
      type: 'list',
      name: 'isLibOrApp',
      message: 'Is this a library or app component',
      choices: ['Library', 'App'],
    },
    {
      type: 'list',
      name: 'componentDestination',
      message: 'Where should this component be placed?',
      choices: (answers) =>
        answers.isLibOrApp === 'App'
          ? [
              ...getDirectories('./apps').filter(
                (choice) => !choice.includes('e2e')
              ),
            ]
          : [...getDirectories('./libs')],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the components name?',
    },
    {
      type: 'confirm',
      name: 'isStyledComponent',
      message: 'Is this a styled component?',
    },
  ],
  actions: (data) => {
    const pathPrefix =
      data.isLibOrApp === 'Library'
        ? `./libs/${data.componentDestination}/src/lib`
        : `./apps/${data.componentDestination}/src/app`;

    let actions = [
      {
        type: 'add',
        path: `${pathPrefix}/components/{{ name}}/index.ts`,
        templateFile: 'plop-templates/indexExport.js.hbs',
      },
      {
        type: 'add',
        path: `${pathPrefix}/components/{{ name}}/types.ts`,
        templateFile: 'plop-templates/Component/types.js.hbs',
      },
      {
        type: 'add',
        path: `${pathPrefix}/components/index.ts`,
        templateFile: 'plop-templates/index.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: `${pathPrefix}/components/index.ts`,
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export { {{ name}} } from './{{ name}}';`,
      },
    ];

    switch (data.isLibOrApp) {
      case 'Library':
        actions.push({
          type: 'add',
          path: `${pathPrefix}/components/{{ name}}/{{ name}}.stories.tsx`,
          templateFile: 'plop-templates/Component/componentStory.js.hbs',
        });
        actions.push({
          type: 'add',
          path: `./libs/${data.componentDestination}/src/index.ts`,
          force: true,
          templateFile:
            'plop-templates/Component/componentLibraryExport.js.hbs',
        });
        actions.push({
          type: 'add',
          path: `./libs/${data.componentDestination}/src/lib/index.ts`,
          force: true,
          templateFile:
            'plop-templates/Component/componentLibraryComponentsExport.js.hbs',
        });
        break;
      case 'App':
        actions.push({
          type: 'add',
          path: `${pathPrefix}/components/{{ name}}/{{ name}}.spec.tsx`,
          templateFile: 'plop-templates/Component/component.test.js.hbs',
        });
        break;
    }

    if (data.isStyledComponent) {
      actions.push(
        {
          type: 'add',
          path: `${pathPrefix}/components/{{ name}}/{{ name}}.tsx`,
          templateFile: 'plop-templates/Component/styledComponent.js.hbs',
        },
        {
          type: 'add',
          path: `${pathPrefix}/components/{{ name}}/{{ name}}Styles.tsx`,
          templateFile: 'plop-templates/Component/componentStyles.js.hbs',
        }
      );
    } else {
      actions.push({
        type: 'add',
        path: `${pathPrefix}/components/{{ name}}/{{ name}}.tsx`,
        templateFile: 'plop-templates/Component/component.js.hbs',
      });
    }

    return actions;
  },
};
