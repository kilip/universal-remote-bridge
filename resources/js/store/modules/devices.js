import axios from 'axios'
import * as types from '../mutation-types'

export const state = {
  list: {}
};

export const getters = {
  list: state => state.list
};

export const mutations = {
  [types.FETCH_DEVICES_SUCCESS] (state, { list }){
    state.list = list
  },
};

export const actions = {
  async fetchDevices({commit}){
    try {
        const {data} = await axios.get('/api/devices');
        commit(types.FETCH_DEVICES_SUCCESS, { list: data });
    }catch (e) {
        commit(types.FETCH_DEVICES_FAILURE);
    }
  }
};

