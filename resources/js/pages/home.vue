<template>
  <div class="row">
    <div class="col-md-3">
      <card title="Settings" class="settings-card">
        <ul class="nav flex-column nav-pills">
          <li v-for="tab in tabs" :key="tab.route" class="nav-item">
            <router-link :to="{ name: tab.route }" class="nav-link" active-class="active">
              <fa :icon="tab.icon" fixed-width />
              {{ tab.name }}
            </router-link>
          </li>
        </ul>
      </card>
    </div>
    <div class="col-md-9">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',

  computed: {
    tabs () {
      return [
        {
          icon: 'home',
          name: this.$t('Dashboard'),
          route: 'home'
        },
        {
          icon: 'network-wired',
          name: this.$t('Controllers'),
          route: 'controllers.index'
        },
        {
          icon: 'tv',
          name: this.$t('Devices'),
          route: 'devices.index'
        },
        {
          icon: 'chalkboard-teacher',
          name: this.$t('Sniffer'),
          route: 'sniffer'
        }
      ]
    }
  },

  metaInfo () {
    return {
      title: this.$t('Remote Devices')
    }
  }
}
</script>
