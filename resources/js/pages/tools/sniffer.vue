<template>
  <card title="Infra Red Sniffer">
    <table v-if="payload['Protocol']" class="table-borderless table-responsive-sm" width="200px">
      <tbody>
        <tr>
          <th>Command</th>
          <input type="text"/>
        </tr>
        <tr v-for="(value, name) in payload">
          <th>{{name}}</th>
          <td>{{value}}</td>
        </tr>
        <tr>
          <td colspan="2">
            <v-button  type="success" class="btn-sm">
              {{ $t('add') }}
            </v-button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      <div class="alert alert-warning">
        No MQTT Payload found.
      </div>
    </div>
  </card>
</template>
<script>
  import Form from "vform";

  export default {
    data: () => ({
      payload: {},
      topic: null,
      device: {
        deviceId: 1001,
        name: "44 Keys RGB Led Strip Remote",
        manufacturer: "Unknown",
        type: "",
        model: "",
      }
    }),
    mqtt: {
      "remote1/tele/RESULT": function(payload, topic){
        if(payload !== null){
          const json = JSON.parse(payload.toString());
          this.payload = json.IrReceived;
          this.topic = topic;
          console.log(json);
        }
      }
    },
    mounted() {
      this.$mqtt.subscribe("remote1/tele/RESULT");
    },
    methods: {
      async update() {

      }
    }
  }
</script>
<style>
  table th {
    min-width: 10em;
  }
</style>
