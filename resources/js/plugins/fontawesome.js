import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import { } from '@fortawesome/free-regular-svg-icons'

import {
  faUser, faLock, faSignOutAlt, faCog, faHome, faNetworkWired, faTv, faChalkboardTeacher
} from '@fortawesome/free-solid-svg-icons'

import {
  faDashcube,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faUser, faLock, faSignOutAlt, faCog, faGithub,
  faHome, faNetworkWired, faTv, faChalkboardTeacher
)

Vue.component('fa', FontAwesomeIcon)
