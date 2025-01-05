import "./Button.css"

interface Props {
    label: string,
    parentMethod: () => void
}

export const Children_Button = ( {label}:Omit<Props, "parentMethod" > ) => {
  return (
    <div>{label} </div>
  )
}


export const Button = ({label, parentMethod}: Props) => {

  return (
  <button
  type="button"
  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  onClick={parentMethod}
  >
    <Children_Button label={label} />
  </button>

  )
}