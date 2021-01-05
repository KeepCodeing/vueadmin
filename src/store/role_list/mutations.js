import {LOAD_ROLE_LIST} from "../type";

export default {
  [LOAD_ROLE_LIST](state, res) {
    state.role_list = res;
  }
}
