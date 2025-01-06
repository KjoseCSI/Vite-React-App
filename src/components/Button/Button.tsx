import { ReactNode } from "react"
import "./Button.css"

interface Props {
    children: ReactNode,
    parentMethod: () => void
}

export const BlackButton = ( {children}:Pick<Props, "children" > ) => {
  return (
    <div className=" text-stone-50">{children} </div>
  )
}


export const Button = ({children , parentMethod}: Props) => {

  return (
  <button
  type="button"
  className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  onClick={parentMethod}
  >
    {children}
  </button>

  )
}