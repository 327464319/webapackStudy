import './css/index.sass'
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