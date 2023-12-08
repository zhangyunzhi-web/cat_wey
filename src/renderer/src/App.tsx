import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from './store/hooks'
import { shallowEqual } from 'react-redux'
import { decrementAction, incrementAction } from './store/modules/counter'
import ZLayout from './layout/index'

// import routes from './router'
// import Header from './components/header'
// import Footer from './components/footer'

const App = memo(() => {
  // const { count, name } = useAppSelector(
  //   (state) => ({
  //     count: state.counter.count,
  //     name: state.people.name
  //   }),
  //   shallowEqual
  // )
  // const dispatch = useAppDispatch()
  // const handleAdd = (num: number) => {
  //   dispatch(incrementAction(num))
  // }
  // const handleSub = (num: number) => {
  //   dispatch(decrementAction(num))
  // }
  return (
    <div className="App">
      <ZLayout></ZLayout>
      {/* <h2>当前计数：{count}</h2>
      <h2>当前名字：{name}</h2>
      <button onClick={() => handleAdd(1)}>+</button>
      <button onClick={() => handleSub(-1)}>-</button> */}
      {/* <Header /> */}
      {/* <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense> */}
      {/* <Footer /> */}
    </div>
  )
})

export default App
