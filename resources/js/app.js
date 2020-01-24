import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'
import VueMqtt from 'vue-mqtt';

import '~/plugins'
import '~/components'

Vue.config.productionTip = false;
Vue.use(VueMqtt,'mqtt://hestia.itstoni.com',{
  username: 'mqtt',
  password: '$3cr3t',
  port: 1884,
  clientId: 'doyolabs-ir-bridge',
  qos: 0,
  retain: false
});

/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})
