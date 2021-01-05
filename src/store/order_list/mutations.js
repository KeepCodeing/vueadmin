import {LOAD_ORDER_LIST} from "../type";

export default {
  [LOAD_ORDER_LIST](state, res) {
    state.order_list = res;
  }
}
