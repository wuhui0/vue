// 该文件干了两件事
// 创建vue的构造函数
// 设置vue实例的成员

import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'
// 此处不用class的原因是因为方便后续给Vue实例混入实例成员
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 调用_init()方法
  this._init(options)
}
// 这几个函数的作用都是给vue的原型上混入一些成员 属性或者方法 
// 其实就是给vue的实例对象增加相应的成员


// 注册vm的_init()方法，初始化vm
initMixin(Vue)
// 注册vm的属性 $data/$props
// 方法 $set/$delete/$watch
stateMixin(Vue)
// 初始化事件相关方法
// $on/$once/$off/$emit
eventsMixin(Vue)
// 初始化生命周期相关的混入方法
// _update/$forceUpdate/$destory
// _update内部调用了patch方法 把虚拟dom转换成真实dom，最后存储到$el里面来
lifecycleMixin(Vue)
// 混入render 调用用户传入的render
// $nextTick/_render
renderMixin(Vue)

export default Vue
