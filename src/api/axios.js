import axios from 'axios'
import store from '../store'

// 配置api的环境，生产环境以及正式环境
// 测试环境
// 生产环境
export const apiPath = process.env.NODE_ENV == 'production' ? '' : '/api';