import {LOAD_USER_LIST} from "../type";

export default {
  [LOAD_USER_LIST](state, res) {
    state.user_list = res;
  }
}
