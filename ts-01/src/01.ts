(()=> {
    type CounterType = null | number
    const name:string = "fran"
    const PI: number = 3.14
    let married: boolean = false
    let counter: CounterType = null
    counter=1

    const heroes: number = 20
    const villans: number = 21
    type DeltaType = undefined | number
    let delta :DeltaType
    const fran = {
        name: 'franco',
        lastname: 'di leo'
    }

    //fran.age = 30
    if(heroes > villans) {
        delta = heroes-villans
    } else {
        delta = Number('1A')
        console.log('typeof(delta)', typeof(delta)) // typeof NaN --> number
    }
    if(Number.isNaN(delta)) {
        delta = 0
    }
    console.log(delta)

    let obj:any = {x:0} // NUNCA!!!
    // obj.foo()    
    // obj()
    // obj.prop = 200
    // obj = "hello moto"

    let val: unknown = "fran"
    if(typeof val === "number") {
        console.log(`${val.toFixed(2)}`)
    } else if(typeof val == 'string'){
        val.toUpperCase()
    }
    const product: string="Chaleco de nieve"
    product.toLowerCase()
})()