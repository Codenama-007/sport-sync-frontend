"use client"
import React from 'react'
import { CardFooter } from './ui/card'
import { Field , FieldGroup , FieldLabel} from './ui/field'
import { Button } from './ui/button'
import { Input } from './ui/input'




const Step3 = ({step , update_step , formData , setFormData}) => {
    const handleSubmit = (e) => {

    e.preventDefault();

    if(formData.password.length < 8){
        alert("Password must be at least 8 characters.");
        return;
    }

    console.log(formData);

}
    return (
        <>
            <FieldGroup>
                <Field>
                    <FieldLabel>
                        Email
                    </FieldLabel>
                    <Input className='border-none outline-none shadow-md active:outline-none rounded-xl' type='email' placeholder='Enter Your Username' value={formData.email}
    onChange={(e) =>
        setFormData({
            ...formData,
            email: e.target.value,
        })
    } required/>
                    <FieldLabel>
                        Password
                    </FieldLabel>
                    <Input className='border-none outline-none shadow-md active:outline-none rounded-xl' type='password' placeholder='Enter Your Fullname' value={formData.password}
    onChange={(e) =>
        setFormData({
            ...formData,
            password: e.target.value,
        })
    } required/>
                </Field>
            </FieldGroup>
            <CardFooter>
                <Field orientation="horizontal">
                    <Button className = 'bg-red-500 text-gray-700 p-4' onClick={() => { update_step(step - 1) }}>Previous</Button>
                    <Button type='submit' onClick={handleSubmit} className='bg-green-400 text-gray-800 p-4'>
                        Sign Up
                    </Button>
                </Field>
            </CardFooter>
        </>
    )
}

export default Step3