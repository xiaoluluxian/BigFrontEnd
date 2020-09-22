export const currying = (fn: (...args: any[]) => any) => {

   return function curriedFn (...args: any) {
     if (fn.length > args.length) {  // 未达到触发条件，继续收集参数
       return function () {
         return curriedFn.apply(null, args.concat([].slice.call(arguments)))
       }
     }
     return fn.apply(null, args)
   }
 }