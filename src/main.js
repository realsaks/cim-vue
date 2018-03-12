// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

window.$ = window.jQuery = require('jquery');
require('bootstrap');

require('tablesorter/dist/js/jquery.tablesorter');
require('tablesorter/dist/js/jquery.tablesorter.widgets.min');
require('tablesorter/dist/js/widgets/widget-scroller.min');


import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'

import 'tablesorter/dist/css/theme.default.min.css'
import 'tablesorter/dist/css/theme.blue.min.css'
import 'tablesorter/dist/css/theme.bootstrap_4.min.css'
import 'tablesorter/dist/css/widget.grouping.min.css'
import 'tablesorter/dist/css/jquery.tablesorter.pager.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
