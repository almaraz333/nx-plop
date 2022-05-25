const ComponentPlop = require('./plopConfigs/componentPlopFile');
const ViewPlop = require('./plopConfigs/viewPlopFile');
const UtilPlop = require('./plopConfigs/utilPlopFile');
const HookPlop = require('./plopConfigs/hookPlopFile');

module.exports = (plop) => {
  plop.setGenerator('Component', ComponentPlop);
  plop.setGenerator('View', ViewPlop);
  plop.setGenerator('Util', UtilPlop);
  plop.setGenerator('Hook', HookPlop);
};
