import { CharacterProps } from "../types/Character"

export const Character = (props : CharacterProps): React.JSX.Element => {
    const {name, status, gender, id, image} = props
    return (
        <>
            <img style={{width: '100', borderRadius: "50%"}} src={image} />
            <h4>
                {id} - {name} - {status} - {gender}
            </h4>
        </>
    )
}