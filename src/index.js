/* Automatically generated by './build/bin/build-entry.js' */

import Alert from '../packages/alert/index.js';
import Menu from '../packages/menu/index.js';
import CardContainer from '../packages/cardContainer/index.js';
// import locale from 'dlsugar-ui/src/locale';
// import CollapseTransition from 'dlsugar-ui/src/transitions/collapse-transition';

const components = [
  Alert,
  Menu,
  CardContainer,
  // CollapseTransition
];

const install = function(Vue, opts = {}) {
  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  // Vue.use(InfiniteScroll);
  // Vue.use(Loading.directive);

  Vue.prototype.$DLSUGAR = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  // Vue.prototype.$loading = Loading.service;
  // Vue.prototype.$msgbox = MessageBox;
  // Vue.prototype.$alert = MessageBox.alert;
  // Vue.prototype.$confirm = MessageBox.confirm;
  // Vue.prototype.$prompt = MessageBox.prompt;
  // Vue.prototype.$notify = Notification;
  // Vue.prototype.$message = Message;

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.5',
  // locale: locale.use,
  // i18n: locale.i18n,
  install,
  // CollapseTransition,
  // Loading,
  Alert,
  Menu,
  CardContainer
};
