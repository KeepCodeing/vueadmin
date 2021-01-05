import request from "../../network/request";
import {GET_POWER_LIST, LOAD_POWER_LIST} from "../type";

export default {
  [GET_POWER_LIST](context) {
    request({
      url: '/data/power_list',
    }).then(res => context.commit(LOAD_POWER_LIST, res.data));
  },
}
