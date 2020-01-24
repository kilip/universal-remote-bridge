<template>
  <card title="Available Devices">
    <table
      v-if="devices && devices.length > 0"
      class="table-responsive-sm table-bordered"
    >
      <tr v-for="device in devices">
        <td>{{device['device_id']}}</td>
        <td>{{device['name']}}</td>
        <td>{{device['type']}}</td>
        <td>{{device['manufacturer'] || "Unknown"}}</td>
        <td>{{device['model'] || "Unknown"}}</td>
      </tr>
    </table>
  </card>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    middleware: 'auth',
    methods: {
      ...mapActions({
          fetchDevices: 'devices/fetchDevices'
      })
    },
    data: () => ({
    }),
    created(){
      this.fetchDevices();
    },
    computed: {
      ...mapGetters({
        devices: 'devices/list'
      })
    }
  }
</script>
