/**
 * Tarea: Crear un factory para membresías (Membership)
 * Interfaz: type, price, benefits, getBenefits
 */

enum MembershipType {
    FREE = 'FREE',
    STANDARD = 'STANDARD',
    PREMIUM = 'PREMIUM'
}

interface Membership {
    type: MembershipType
    price: number
    benefits: string[]
    getBenefits(): string[]
}

type MembershipProps = Omit<Membership, 'getBenefits'>
// class BaseMembership
// class MembershipCreator --> Crear el objeto membership --> return new BaseMembership() (super)
// FreeMembership, StandardMembership, PremiumMembership

class BaseMembership implements Membership {
    public readonly type: MembershipType
    public readonly price: number
    public readonly benefits: string[]
    constructor(props: MembershipProps) {
        this.type = props.type
        this.price = props.price
        this.benefits = props.benefits
    }

    public getBenefits(): string[] {
        return this.benefits
    }
    // optima
    get listBenefits(): string[] {
        return this.benefits
    }
}

class FreeMembership extends BaseMembership {
    constructor() {
        //crear el objeto base
        super({type: MembershipType.FREE,price: 0, benefits: ['Acceso limitado']})
    }

    public getBenefits(): string[] {
        return super.getBenefits()
        // return super.getBenefits()
    }
}

class StandardMembership extends BaseMembership {
    constructor() {
        super({type: MembershipType.STANDARD,price: 10, benefits: ['Acceso con publicidad']})
    }

    public getBenefits(): string[] {
        return super.getBenefits()
    }
}

class PremiumMembership extends BaseMembership {
    constructor() {
        super({type: MembershipType.PREMIUM,price: 20, benefits: ['Acceso ilimitado']})
    }

    public getBenefits(): string[] {
        return super.getBenefits()
    }
}

abstract class MembershipCreator {
    abstract createMembership(type:MembershipType): Membership
    public printMessage() {
        console.log('hi from abstract')
    }
}

class MembershipFactory extends MembershipCreator {
    // logica que devuelve cada subclase
    public createMembership(type: MembershipType): Membership {
        switch(type) {
            case MembershipType.FREE:
                return new FreeMembership()
            case MembershipType.STANDARD:
                return new StandardMembership()
            case MembershipType.PREMIUM:
                return new PremiumMembership()
            default:
                throw new Error('Tipo de membresía incorrecto')
        }
    }
}

const factory = new MembershipFactory()
const freeMembership = factory.createMembership(MembershipType.FREE).getBenefits()
const premium = factory.createMembership(MembershipType.PREMIUM).getBenefits()