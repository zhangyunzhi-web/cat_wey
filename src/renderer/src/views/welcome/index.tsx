
import React, { memo, useEffect, useState } from 'react'
import * as Cesium from 'cesium'
import CesiumZh from "@renderer/utils/cesiumZh";

import { CESIUM_TOKEN } from '@renderer/config'


const Welcome: React.FC = memo(() => {
  const [clip, setClip] = useState('test')
  useEffect(() => {
    Cesium.Ion.defaultAccessToken = CESIUM_TOKEN
    // window.CESIUM_BASE_URL = "/";
    const viewer = new Cesium.Viewer('cesiumContainer', {
      infoBox: false,
      //duration: 3
    });
    viewer.cesiumWidget.creditContainer.style!.display = "none";
    CesiumZh.load();
  }, [])

  function readClipboard() {

    // interface ListNode {
    //   val: number
    //   next: ListNode | null
    // }
    // function reverseBookList(head: ListNode | null): number[] {
    //   function result(head: ListNode | null): number[] {
    //     if (!head) {
    //       return []
    //     } else {
    //       return [head.val].concat(result(head.next))
    //     }
    //   }
    //   if (!head) {
    //     return []
    //   } else {
    //     let arr = result(head)
    //     for (let i = 0; i < arr.length / 2; i++) {
    //       let temp = arr[i]
    //       arr[i] = arr[arr.length - 1 - i]
    //       arr[arr.length - 1 - i] = temp
    //     }
    //     return arr
    //   }
    // };
    // function trainningPlan(head: ListNode | null): ListNode | null {
    //   let prev = null
    //   while (head != null) {
    //     const temp = head.next
    //     console.log("%c Line:37 🥥 temp", "color:#93c0a4", temp);
    //     head.next = prev
    //     prev = head
    //     head = temp
    //     console.log(head, prev)
    //   }
    //   return prev
    // };
    // 8.versions 是一个项目的版本号列表，因多人维护，不规则，动手实现一个版本号处理函数（30分）
    // 例如：
    // const versions = ["1.45.0", "1.5.1", "1.5", "6", "3.3.3.3.3.3.3"];
    // // 要求从小到大排序，注意'1.45'比'1.5'大
    // function sortVersion(versions: string[]): string[] {
    //   // TODO
    //   return versions.sort((a, b) => {
    //     let aArr = a.split(".");
    //     let bArr = b.split(".");
    //     for (let i = 0; i < aArr.length; i++) {
    //       if (Number(aArr[i]) > Number(bArr[i])) {
    //         return 1;
    //       } else if (Number(aArr[i]) < Number(bArr[i])) {
    //         return -1;
    //       } else {
    //         if (aArr.length < bArr.length) {
    //           return -1;
    //         }
    //       }
    //     }
    //   })
    // }
    // console.log(sortVersion(versions))
    // => ['1.5','1.45.0','3.3.3.3.3.3','6']
    // let head: ListNode = {
    //   val: 1,
    //   next: {
    //     val: 2,
    //     next: {
    //       val: 3,
    //       next: {
    //         val: 4,
    //         next: {
    //           val: 5,
    //           next: null
    //         }
    //       }
    //     }
    //   }
    // }
    // trainningPlan(head)
    // reverseBookList(head)
    navigator.clipboard.readText()
      .then(function (clipboardContent) {
        console.log('剪切板内容:', clipboardContent);
        setClip(clipboardContent)
        return clipboardContent;
      })
      .catch(function (error) {
        console.error('无法读取剪切板内容:', error);
      });
  }
  return (
    // <div className="text-blue-600 text-large circle" onClick={readClipboard}>{clip}</div>

    <div id='cesiumContainer' className='w-full h-full' ></div>

  )
})


export default Welcome
