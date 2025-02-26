import './App.css'
import { fib, memoizedFib } from './homework/fibonacci'

function App() {
  // 2^n
  console.time('fib')
  console.log(fib(40))
  console.timeEnd('fib')
  console.time('m-fib')
  memoizedFib(40)
  console.timeEnd('m-fib')
  return (
    <span>hola mundo</span>
  )
}

export default App
