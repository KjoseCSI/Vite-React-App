import { zodResolver } from "@hookform/resolvers/zod"
import {SubmitHandler ,useForm } from "react-hook-form"
import { CustomInput } from "../CustomInput"
import { schema, FormValues } from "../Models/FormSchema";



export const CustomForm = () => {

    const {control, handleSubmit, formState: { errors }} = useForm<FormValues>({
        resolver: zodResolver(schema)
    })

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomInput name="name" control={control} label="Name" type="text" error={errors.name}/>
            <CustomInput name="email" control={control} label="Email" type="email" error={errors.email}/>
            <CustomInput name="password" control={control} label="Password" type="password" error={errors.password}/>
            <CustomInput name="confirmPassword" control={control} label="Confirm Password" type="password" error={errors.confirmPassword}/>
            <button className="bg-black hover:bg-gradient-to-br from-white to-black rounded-md m-2 p-2 " 
            type="submit">
                <span className="bg-clip-text bg-gradient-to-br from-blue-700 to-white text-transparent " >Submit </span> 
            </button>
        </form>
    )
}
