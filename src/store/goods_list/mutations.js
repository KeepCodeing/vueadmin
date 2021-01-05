import {LOAD_GOODS_LIST} from "../type";

export default {
  [LOAD_GOODS_LIST](state, res) {
    state.goods_list = res;
  }
}
