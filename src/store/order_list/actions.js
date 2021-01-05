import request from "../../network/request";
import {GET_ORDER_LIST, LOAD_ORDER_LIST} from "../type";

export default {
  [GET_ORDER_LIST](context) {
    request({
      url: '/data/order_list'
    }).then(res => context.commit(LOAD_ORDER_LIST, res.data));
  }
}
