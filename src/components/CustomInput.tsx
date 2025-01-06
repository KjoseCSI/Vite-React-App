import {  Control ,Controller,FieldError } from "react-hook-form";
import { FormValues } from "./Models/FormSchema"

interface Props {
    name: keyof FormValues ,
    control: Control<FormValues>,
    label: string,
    type?: string,
    error?: FieldError
}


export const CustomInput = ({name,control,label,type,error}:Props) => {
  return (
    <div className="flex flex-col mb-2">
                <label className="m-2 font-bold" htmlFor={name}>{label}</label>
                <Controller 
                    name={name}
                    control={control} 
                    render={({field}) => 
                        <input id={name} type={type} {...field} className={` border border-zinc-600 rounded-md  ${error ? "is-invalid": "" }`}/>
                }
                />
                {error && <p className="text-red-500 text-lg mt-1"> {error.message} </p>}
            </div>
  )
}
