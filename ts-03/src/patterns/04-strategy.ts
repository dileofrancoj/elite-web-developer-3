/*
    Strategy es un patrón de diseño de comportamiento que te permite definir
     una familia de algoritmos, colocar cada uno de ellos en una clase separada
    y hacer sus objetos intercambiables.
*/

// Estrategia de descuentos (subclases) - algoritmos intercambiables
/**
 * 1. NoDiscount
 * 2. Descuento por porcentaje
 * 3. Descuento fijo
 */

abstract class DiscountStrategyClass {
    abstract applyDiscount(amount: number): number
    verifyDiscount(amount?: number): boolean {
        return true
    }

}

interface DiscountStrategy {
    applyDiscount(amount: number): number
}


class NoDiscount extends DiscountStrategyClass {
    constructor() {
        super()
    }
    applyDiscount(amount: number): number {
        return amount
    }
}

class PercentageDiscount implements DiscountStrategy {
    private percentage: number
    /**
     * 
     * @param amount - Monto total sobre el cual se aplica el descuento
     * @returns El monto luego de aplicar el descuento
     * Nota: `this.percentage` representa un numero con valor entre 0 y 100
     */
    constructor(percentage: number) {
        this.percentage = percentage
    }
    applyDiscount(amount: number): number {
        // amount = 100
        // percentage = 10
        // 90
        const discount = amount * (this.percentage / 100)
        return amount - discount
    }
}

class FixedDiscount extends DiscountStrategyClass {
    private fixedAmount: number
    constructor(fixedAmount: number) {
        super()
        this.fixedAmount = fixedAmount
    } 

    verifyDiscount(amount: number): boolean {
        if(this.fixedAmount > amount && this.fixedAmount < 0) return false
        return true
    }
    // función de verificar
    applyDiscount(amount: number): number {
       if(this.verifyDiscount(amount)) return amount - this.fixedAmount
       throw new Error('invalid discount')
    }
}

class PaymentProcessor {
    private discountStrategy: DiscountStrategy = new NoDiscount()
    /*
    constructor() {
        this.discountStrategy = new NoDiscount()
    }
     */
    // setDiscountStrategy(strategyType: StrategyType) -- singleton si existe la instancia o no
    setDiscountStrategy(strategy: DiscountStrategy): void {
        this.discountStrategy = strategy
    }

    processPayment(amount: number): number {
        return this.discountStrategy.applyDiscount(amount)
    }
}
// new PercentageDiscount()

const processor = new PaymentProcessor() // NoDiscount
let amount = processor.processPayment(100)
console.log(amount) // 100
processor.setDiscountStrategy(new PercentageDiscount(20)) // seteamos otra estrategia
amount = processor.processPayment(100)
console.log(amount) // 80
processor.setDiscountStrategy(new FixedDiscount(50))
amount = processor.processPayment(100)
console.log(amount) // 50

// Singleton