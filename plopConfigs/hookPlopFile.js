const { readdirSync } = require('fs');

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

module.exports = {
  description: 'Create a React hook',
  prompts: [
    {
      type: 'list',
      name: 'componentDestination',
      message: 'Where should this hook be placed?',
      choices: () => [
        ...getDirectories('./apps').filter((choice) => !choice.includes('e2e')),
      ],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the hooks name?',
    },
  ],
  actions: (data) => {
    const pathPrefix = `./apps/${data.componentDestination}/src/app`;
    let actions = [
      {
        type: 'add',
        path: `${pathPrefix}/hooks/{{camelCase name}}/{{camelCase name}}.ts`,
        templateFile: 'plop-templates/Hook/hook.js.hbs',
      },
      {
        type: 'add',
        path: `${pathPrefix}/hooks/index.ts`,
        templateFile: 'plop-templates/index.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: `${pathPrefix}/hooks/index.ts`,
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export { {{camelCase name}} } from './{{camelCase name}}';`,
      },
      {
        type: 'add',
        path: `${pathPrefix}/hooks/{{camelCase name}}/{{camelCase name}}.spec.ts`,
        templateFile: 'plop-templates/Hook/hook.spec.js.hbs',
      },
      {
        type: 'add',
        path: `${pathPrefix}/hooks/{{camelCase name}}/index.ts`,
        templateFile: 'plop-templates/Hook/index.js.hbs',
      },
    ];

    return actions;
  },
};
