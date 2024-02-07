import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { GridWrapper } from './gridStyle'
interface IProps {
  children?: ReactNode
}
const Grid: FC<IProps> = memo(() => {
  useEffect(() => {
    let a = 1
    if (a === 1) {
      console.log(1)
    } else if (a > 0) {
      console.log(2)
    }
  }, [])
  return <GridWrapper>
    <div className='grid1'>grid1</div>
    <div className='grid2'>grid2</div>
    <div className='grid3'>grid3</div>
    <div className='grid4'>grid4</div>
    <div className='grid5'>grid5</div>
    <div className='grid6'>grid6</div>
    <div className='grid7'>grid7</div>
    <div className='grid8'>grid8</div>
    <div className='grid9'>grid9</div>
  </GridWrapper>
})

export default Grid
