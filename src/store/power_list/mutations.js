import {LOAD_POWER_LIST} from "../type";

export default {
  [LOAD_POWER_LIST](state, res) {
    state.power_list = res;
  }
}
