import request from "../../network/request";
import {GET_ROLE_LIST, LOAD_ROLE_LIST} from "../type";

export default {
  [GET_ROLE_LIST](context) {
    request({
      url: '/data/role_list'
    }).then(res => context.commit(LOAD_ROLE_LIST, res.data));
  }
}
