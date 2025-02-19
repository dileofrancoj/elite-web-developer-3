(()=>{
    interface Label {
        title: string
        color: string
    }
    interface Product {
        id: number,
        name: string
        price: number
        stock: boolean
        quantity : number
        label?: Label[]
    }
    const ages: number[] = [30,36, 34, 46]
    const names: Array<string>= ["Franco", "Pablito", "Joaquin", "Seba"]
    ages.forEach((age: number) =>{
        console.log('age:', age)
    })

    const product1: Product = {
        id:1,
        name: 'Sombrilla de playa',
        price: 95,
        stock: true,
        quantity : 150,
    }

    const product2: Product = {
        id: 2,
        name: 'Reposera',
        price: 30,
        stock: true,
        quantity: 75,
        label: [
            {
                title: 'Reforzada',
                color:'#6BBB4A'
            }
        ]
    }
    const products: Product[] = [product1, product2]

    const filterProduct = (products: Product[],id: number): Product[] => {
        return products.filter((product)=> product.id=== id)
    }

    function modifyHeaders(header: any): void {
        header.jwt = 'some-jwt'
    }

})()