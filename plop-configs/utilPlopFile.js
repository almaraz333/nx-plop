const { readdirSync } = require('fs');

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

module.exports = {
  description: 'Create a reusable utility',
  prompts: [
    {
      type: 'list',
      name: 'utilDestination',
      message: 'Where should this util be placed?',
      choices: () => [
        ...getDirectories('./apps').filter((choice) => !choice.includes('e2e')),
      ],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the utils name?',
    },
  ],
  actions: (data) => {
    const pathPrefix = `./apps/${data.utilDestination}/src/app`;

    let actions = [
      {
        type: 'add',
        path: `${pathPrefix}/utils/{{ name}}/{{ name}}.ts`,
        templateFile: 'plop-templates/Util/util.js.hbs',
      },
      {
        type: 'add',
        path: `${pathPrefix}/utils/index.ts`,
        templateFile: 'plop-templates/index.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: `${pathPrefix}/utils/index.ts`,
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export { {{ name}} } from './{{ name}}';`,
      },
      {
        type: 'add',
        path: `${pathPrefix}/utils/{{ name}}/{{ name}}.spec.ts`,
        templateFile: 'plop-templates/Util/util.spec.js.hbs',
      },
      {
        type: 'add',
        path: `${pathPrefix}/utils/{{ name}}/index.ts`,
        templateFile: 'plop-templates/Util/index.js.hbs',
      },
      {
        type: 'add',
        path: `${pathPrefix}/utils/{{ name}}/types.ts`,
        templateFile: 'plop-templates/Util/types.js.hbs',
      },
    ];

    return actions;
  },
};
