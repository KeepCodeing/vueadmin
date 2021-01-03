import request from "../../network/request";
import {GET_USER_LIST, LOAD_USER_LIST} from "../type";

export default {
  [GET_USER_LIST](context) {
    request({
      url: '/data/user_list'
    }).then(res => context.commit(LOAD_USER_LIST, res.data));
  }
}
