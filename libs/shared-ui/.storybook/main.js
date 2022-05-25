const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,
  addons: [...rootMain.addons],
  stories: [...rootMain.stories, '../src/**/*.stories.tsx'],
};
