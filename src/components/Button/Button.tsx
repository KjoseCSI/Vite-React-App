import "./Button.css"

interface Props {
    label: string,
    parentMethod: () => void
}

export const Button = ({label, parentMethod}: Props) => {

    return (
    <button className='button-plus-1' onClick={parentMethod}>
      {label}
    </button>
    )
    
}
 