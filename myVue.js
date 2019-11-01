// new Myvue({
//   data: ''
// })
class Myvue{
  constructor(options){
    this.$options=options
    this.$data = options.data
    this.observe(this.$data)
  }
  // observe方法对data进行遍历。对内个属性进行get，set的访问器属性设置。
  observe(data){
    // 如果data为空，或不是对象。直接返回。
    if(!data || typeof data !=='object') return 
    // object.keys返回数组。
    Object.keys(data).forEach(key=>{
      // 调用设置set，get的方法。
      this.defineSetGet(data,key,data[key])
    })
    // console.log(arr)
  }
  defineSetGet(data,key,val){
    // 递归。如果当前的val还是对象，接着遍历。
    this.observe(val)
    Object.defineProperty(data,key,{
      get() {
        return val
      },
      // 当对应的属性修改时触发。
      set(newVal) {
        if(newVal===val) return
        // 将旧值进行修改。
        val=newVal
        console.log('设置了属性'+key+'---'+data[key])
      }
    })
  }
}