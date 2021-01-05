import request from "../../network/request";
import {GET_GOODS_LIST, LOAD_GOODS_LIST} from "../type";

export default {
  [GET_GOODS_LIST](context) {
    request({
      url: '/data/goods_list'
    }).then(res => context.commit(LOAD_GOODS_LIST, res.data));
  }
}
