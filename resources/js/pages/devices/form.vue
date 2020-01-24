<template>
  <card>
    <form @submit.prevent="update">
      <!-- Device ID -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('Device ID') }}</label>
        <div class="col-md-7">
          <input v-model="form.deviceId" :class="{ 'is-invalid': form.errors.has('deviceId') }" class="form-control" type="text" name="name">
          <has-error :form="form" field="deviceId" />
        </div>
      </div>

      <!-- Name -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('Name') }}</label>
        <div class="col-md-7">
          <input v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" class="form-control" type="text" name="name">
          <has-error :form="form" field="deviceId" />
        </div>
      </div>

      <!-- Manufacturer -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('Manufacturer') }}</label>
        <div class="col-md-7">
          <input v-model="form.manufacturer" :class="{ 'is-invalid': form.errors.has('manufacturer') }" class="form-control" type="text" name="manufacturer">
          <has-error :form="form" field="manufacturer" />
        </div>
      </div>

      <!-- Type -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('Type') }}</label>
        <div class="col-md-7">
          <input v-model="form.type" :class="{ 'is-invalid': form.errors.has('type') }" class="form-control" type="text" name="type">
          <has-error :form="form" field="type" />
        </div>
      </div>

      <!-- Model -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('Model') }}</label>
        <div class="col-md-7">
          <input v-model="form.model" :class="{ 'is-invalid': form.errors.has('model') }" class="form-control" type="text" name="model">
          <has-error :form="form" field="model" />
        </div>
      </div>

      <!-- Submit Button -->
      <div class="form-group row">
        <div class="col-md-9 ml-md-auto">
          <v-button :loading="form.busy" type="success">
            {{ $t('update') }}
          </v-button>
        </div>
      </div>
    </form>
  </card>
</template>

<script>
  import Form from "vform";

  export default {
    data: () => ({
      payload: {},
      topic: null,
      form: new Form({
        deviceId: "",
        manufacturer: "",
        type: "",
        model: "",
      }),
    }),
    created () {
      // Fill the form with user data.
      this.form.keys().forEach(key => {
        this.form[key] = this.device[key]
      })
    },
  }
</script>
