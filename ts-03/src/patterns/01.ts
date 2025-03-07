/*
    Patrón factory: Es un patron creacional.
    Proporcionar una interfaz zpara crear objetos en una super clase mientras
    las subclases pueden alterar el comportamiento o el tipo de objeto que crean
*/

interface Product {
    name: string
    price: number
    description: string
}

class BaseProduct implements Product {
    public readonly name: ProductName
    public readonly price: ProductPrice
    public readonly description: ProductDescription
    
    constructor(name: string, price: number, description: string){
        this.name = name
        this.price = price
        this.description = description
    }
}


type ProductName = Product['name']
type ProductPrice = Product['price']
type ProductDescription = Product['description']

interface ConcreteCreator {
    createProduct(name: ProductName, price:ProductPrice, description: ProductDescription): Product
}


export class ProductFactory implements ConcreteCreator{
    // constructor()
    public createProduct(name: string, price: number, description: string): Product {
        // const tracking = this.buildTracking()
        return new BaseProduct(name, price, description)
        /*
        return {
            name,
            price,
            description
        }
         */
    }
}

export class ElectronicProduct extends ProductFactory {
    constructor() {
        super()
    }

    public createProduct(name: string, price: number): Product {
        const description = 'Producto de electronica'
        return super.createProduct(name, price, description)
    }
}

// productos gratuitos, price = 0, description= 'producto gratuito'
class FreeProduct extends ProductFactory {
    static bla: string = "holis"
    constructor() {
        super()
    }

    public createProduct(name: string): Product {
        const price = 0
        const desc = 'Producto sin descripción'
        return super.createProduct(name, price, desc)
    }
}

const electronicProduct : Product = new ElectronicProduct().createProduct('Microfono', 100)
console.log(electronicProduct.name, electronicProduct.price, electronicProduct.description)

const freeProd: Product = new FreeProduct().createProduct('Tela para ropa')
console.log(freeProd.name, freeProd.price, freeProd.description)

// recipient, message, send()

interface Notification {
    recipient: string
    id: string
    message: string
    send(someParam?: unknown): void
}

type NotificationData = Omit<Notification, 'send'> // type NotificationDataVariant = Pick<Notification, 'message' | 'recipient'>

interface ConcreteNotification {
    createNotification(recipient: string, message: string): NotificationData
}

class BaseNotification implements NotificationData {
    private generateId(): string {
        return 'randomId'
    }
    public id: string = ""
    constructor(public readonly recipient: string, public readonly message: string) {
        this.id = this.generateId()
    }
}

export class NotificationFactory implements ConcreteNotification{
    private generateId(): string {
        return 'randomId'
    }
    public createNotification(recipient: string, message: string): NotificationData {
        return {
            recipient,
            message,
            id: this.generateId()
        }
    }
}

export class EmailNotification extends NotificationFactory {
    constructor() {
        super()
    }

    public createNotification(recipient: string, message: string): Notification {
        return {
            ...super.createNotification(recipient, message),
            send: () => console.log('Enviando email a ', recipient)
        }
    }
}

export class SMSNotification extends NotificationFactory{
    constructor() {
        super()
    }
    public createNotification(recipient: string, message: string): Notification {
        return {
            ...super.createNotification(recipient, message), // {recipient, message, id},
            send: () => console.log('Enviando notificacion via mensaje de texto')
        }
    }
}

const smsNotification = new SMSNotification().createNotification('1144739222','holis por sms')
smsNotification.send()

const email = new EmailNotification().createNotification('dileo.francoj@gmail.com', 'holis desde ts')
email.send() // enviar el mail

/*
    NotificationFactory {
        if(type == 'wp') {cliente wp}
        if(...) {cliente}
    } 
*/
// PUSH, EMAIL, SMS, ...
