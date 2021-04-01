import './css/index.sass'
import baseApi from './api/http'
// import $ from 'jquery'
console.log(baseApi);
function sayHello () {
  console.log('hello,world111222345');
}
setTimeout(() => {
  sayHello()
}, 0)
class Xiaochou {
  name = 'xys'
}
console.dir(Xiaochou)
function* gg () {
  yield 1
  yield 2
  return 3
}
console.log(new gg().next());
console.log($);
console.log(window.$);

export const a = 1
export const b = 2
export const c = 3
