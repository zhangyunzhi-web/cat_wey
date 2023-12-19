import { memo, useEffect, useState } from 'react'

import { StyledContainer } from './style'
const Turnplate = memo(() => {
  const [Meal, setMeal] = useState<string>()
  // useEffect(() => {
  //   let turnplate: string[] = [
  //     '膳美',
  //     '煎饼果子'
  //   ]
  //   setTurnplateList(turnplate)
  // }, [TurnplateList])
  let mealList: string[] = [
    '膳美',
    '煎饼果子',
    '包子',
    '饺子',
    '大棒骨',
    '猪肘饭',
    '麻辣烫',
    '炸串'
  ]
  useEffect(() => {
    setMeal(mealList[Math.floor(Math.random() * mealList.length)])
  }, [mealList])
  const changeMeal = () => {
    setMeal(mealList[Math.floor(Math.random() * mealList.length)])
  }

  return (
    <StyledContainer className='text-red-600' onClick={changeMeal}>{Meal}</StyledContainer>
  )
})


export default Turnplate
