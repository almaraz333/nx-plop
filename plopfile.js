const ComponentPlop = require('./plopConfigs/componentPlopFile');
const ViewPlop = require('./plopConfigs/viewPlopFile');
const UtilPlop = require('./plopConfigs/utilPlopFile');

module.exports = (plop) => {
  plop.setGenerator('Component', ComponentPlop);
  plop.setGenerator('View', ViewPlop);
  plop.setGenerator('Util', UtilPlop);

  // plop.setGenerator('Hook', {
  //   description: 'Create a custom react hook',
  //   prompts: [
  //     {
  //       type: 'input',
  //       name: 'name',
  //       message: "What is your hook's name?",
  //     },
  //   ],
  //   actions: [
  //     {
  //       type: 'add',
  //       path: 'src/hooks/{{camelCase name}}/{{camelCase name}}.ts',
  //       templateFile: 'plop-templates/Hook/hook.js.hbs',
  //     },
  //     {
  //       type: 'add',
  //       path: 'src/hooks/index.ts',
  //       templateFile: 'plop-templates/hook-index.js.hbs',
  //       skipIfExists: true,
  //     },
  //     {
  //       type: 'append',
  //       path: 'src/hooks/index.ts',
  //       pattern: `/* PLOP_INJECT_EXPORT */`,
  //       template: `export { {{camelCase name}} } from './{{camelCase name}}';`,
  //     },
  //     {
  //       type: 'add',
  //       path: 'src/hooks/{{camelCase name}}/{{camelCase name}}.spec.ts',
  //       templateFile: 'plop-templates/Hook/hook.spec.js.hbs',
  //     },
  //     {
  //       type: 'add',
  //       path: 'src/hooks/{{camelCase name}}/index.ts',
  //       templateFile: 'plop-templates/Hook/index.js.hbs',
  //     },
  //   ],
  // });

  // plop.setGenerator('Util', {
  //   description: 'Create a custom util',
  //   prompts: [
  //     {
  //       type: 'input',
  //       name: 'name',
  //       message: "What is your util's name?",
  //     },
  //   ],
  //   actions: [
  //     {
  //       type: 'add',
  //       path: 'src/utils/{{camelCase name}}/{{camelCase name}}.ts',
  //       templateFile: 'plop-templates/Util/util.js.hbs',
  //     },
  //     {
  //       type: 'add',
  //       path: 'src/utils/index.ts',
  //       templateFile: 'plop-templates/util-index.js.hbs',
  //       skipIfExists: true,
  //     },
  //     {
  //       type: 'append',
  //       path: 'src/utils/index.ts',
  //       pattern: `/* PLOP_INJECT_EXPORT */`,
  //       template: `export { {{camelCase name}} } from './{{camelCase name}}';`,
  //     },
  //     {
  //       type: 'add',
  //       path: 'src/utils/{{camelCase name}}/{{camelCase name}}.spec.ts',
  //       templateFile: 'plop-templates/Util/util.spec.js.hbs',
  //     },
  //     {
  //       type: 'add',
  //       path: 'src/utils/{{camelCase name}}/index.ts',
  //       templateFile: 'plop-templates/Util/index.js.hbs',
  //     },
  //     {
  //       type: 'add',
  //       path: 'src/utils/{{camelCase name}}/types.ts',
  //       templateFile: 'plop-templates/Util/types.js.hbs',
  //     },
  //   ],
  // });
};
