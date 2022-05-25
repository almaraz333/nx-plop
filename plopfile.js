const ComponentPlop = require('./plop-configs/componentPlopFile');
const ViewPlop = require('./plop-configs/viewPlopFile');
const UtilPlop = require('./plop-configs/utilPlopFile');
const HookPlop = require('./plop-configs/hookPlopFile');

module.exports = (plop) => {
  plop.setGenerator('Component', ComponentPlop);
  plop.setGenerator('View', ViewPlop);
  plop.setGenerator('Util', UtilPlop);
  plop.setGenerator('Hook', HookPlop);
};
