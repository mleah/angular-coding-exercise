import merge from '../utils/merge-deep';

export default config => merge(
  require('./configs/default'),
  require(`./configs/${config}`)
);
