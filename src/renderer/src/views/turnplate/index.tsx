
import React, { memo, useState } from 'react'
import './index.less'
let result = Math.floor(Math.random() * (8 - 1 + 1) + 1);  // 随机1~8的整数
// this.result = 2;    // 先定义一个默认抽中的奖品序号为 2
let isAnimation = true;    // 动画循环的开关

//动画参数
let degree = 0;  // 初始角度 默认为0
let time = Date.now();   // 初始启动动画时间，记录下来
let as = 0.5;   // 加速度
let d = -0.5;  // 减速度
let v = 0;     // 初始速度

const trunplate = memo(() => {
  const [rotate, setRotate] = useState({})
  const luckDraw = () => {


    //动画循环
    let frame = () => {
      if (!isAnimation) {
        return;
      }
      // window.requestAnimationFrame这个API是浏览器提供的js全局方法，针对动画效果
      window.requestAnimationFrame(frame);
      update();
    };
    frame();
  }
  const update = () => {
    let now = Date.now(); // 转盘开始转动的时间
    let continueTime = now - time;
    let a = continueTime < 1000 ? as : d;  // 判断是加速度还是减速度
    let finalDeg = null
    // 到达临界值转盘旋转的速度：旋转时的速度（this.v）小于的值 越大速度越快，时间越短
    if (v <= 10 && a < 0) {
      /**
       * 到达临界值转盘旋转的角度
       * 旋转时的速度（this.v）越大达到临界值时调整角度的速度就越大，
       * 数越小调整角度的速度小 （大于200后体现的不明显）
       */
      v = 50;

      let nowDeg = degree % 360; // 到达临界值，实际停止角度
      // console.log(123, this.degree, nowDeg);
      // 实际的停止角度 大于 定义的停止角度
      if (nowDeg > result * 45) {
        // 定义的总度数 = (实际总度数/360°)向上取整后*360° + 抽中的奖品序号*45°
        let finalDeg = Math.ceil(degree / 360) * 360 + result * 45;
        console.log("临界值1", a, v, finalDeg);
      } else {
        // 定义总旋转度数 = (实际总度数/360°)向下取整后*360° + 抽中的奖品序号*45°
        let finalDeg = Math.floor(degree / 360) * 360 + result * 45;
        console.log("临界值2", v, finalDeg);
      }
    } else {
      // 未到达临界值，速度每次都加上加速度的值，让速度从开始加速到减速再到停止
      v += a;
    }
    // 总的角度 = 转盘的速度 * 1 （这里的1是一帧）
    degree += v;
    // console.log('度数', this.v, this.degree)
    // 实际总角度大于定义总角度 且 定义总角度不为零
    if (degree >= finalDeg! && finalDeg !== 0) {
      console.log('this.degree, this.finalDeg', degree, finalDeg);
      // 把定义的总角度赋值给实际总角度
      degree = finalDeg!;
      // 转盘停止后，停止抽奖动画
      isAnimation = false;
      // 转盘停止后的提示，传奖品序号
      prompt(result);
    }
    // 抽奖转盘旋转的角度 （样式）
    setRotate({ rotate: _rotateStyle(degree) });
  }
  // 转盘旋转的角度 （样式）
  const _rotateStyle = (deg: number) => {
    return { WebkitTransform: `rotate3d(0,0,1,${deg}deg)` };
  }
  // 打印抽中的奖品序号
  const prompt = (number: number) => {
    console.log('number', number);
  }
  return (
    <div className="luckDraw">
      <div className="box">
        {/* 底座 */}
        <div className="base">
          {/* 转盘 */}
          <div className="turntable" style={rotate}></div>
          {/* 指针 */}
          <div className="btn">
            <div onClick={luckDraw}>抽</div>
          </div>
        </div>
      </div>
    </div>
  )
})


export default trunplate
