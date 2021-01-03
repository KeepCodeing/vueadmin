import request from "../../network/request";
import {GET_MENU_LIST, LOAD_MENU_LIST} from '../type'

export default {
  [GET_MENU_LIST](context) {
    request({
      url: '/data/menu_list'
    }).then(res => context.commit(LOAD_MENU_LIST, res.data));
  }
}
