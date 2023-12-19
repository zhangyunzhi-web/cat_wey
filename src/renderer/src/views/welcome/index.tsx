
import React, { memo, useState } from 'react'


const Welcome = memo((props) => {
  const [clip, setClip] = useState('test')
  function readClipboard() {

    interface ListNode {
      val: number
      next: ListNode | null
    }
    function reverseBookList(head: ListNode | null): number[] {
      function result(head: ListNode | null): number[] {
        if (!head) {
          return []
        } else {
          console.log([head.val].concat(result(head.next)))
          return [head.val].concat(result(head.next))
        }
      }
      if (!head) {
        return []
      } else {
        let arr = result(head)
        for (let i = 0; i < arr.length / 2; i++) {
          let temp = arr[i]
          arr[i] = arr[arr.length - 1 - i]
          arr[arr.length - 1 - i] = temp
        }
        return arr
        console.log("%c Line:25 🍷 arr", "color:#93c0a4", arr);
      }
    };
    let head: ListNode = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 5,
              next: null
            }
          }
        }
      }
    }

    reverseBookList(head)
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
    <div className="text-blue-600 text-large" onClick={readClipboard}>{clip}</div>
  )
})


export default Welcome
