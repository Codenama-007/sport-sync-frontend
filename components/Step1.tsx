
"use client"
import React from 'react'
import { FieldGroup , Field , FieldLabel} from './ui/field'
import { Input } from './ui/input'
import {Textarea} from './ui/textarea'
import { CardFooter } from './ui/card'
import { Button } from './ui/button'
import { StepProps } from "@/types/form";

const Step1 = ({
  step,
  update_step,
  formData,
  setFormData,
}: StepProps) => {
  const handleNext = () => {

    if(formData.username.length < 8){
        alert("Username should be at least 8 characters.");
        return;
    }

    update_step(step + 1);
}
  return (
    <>
    
    <FieldGroup>
      <Field>
        <FieldLabel>
          Username
        </FieldLabel>
        <Input className='border-none outline-none shadow-md active:outline-none rounded-xl' type='text' placeholder='Enter Your Username' value={formData.username}
    onChange={(e) =>
        setFormData({
            ...formData,
            username: e.target.value,
        })
    } required/>
        <FieldLabel>
          Fullname
        </FieldLabel>
        <Input className='border-none outline-none shadow-md active:outline-none rounded-xl' type='text' placeholder='Enter Your Fullname' value={formData.fullname}
    onChange={(e) =>
        setFormData({
            ...formData,
            fullname: e.target.value,
        })
    } required/>
        <FieldLabel>
          Bio
        </FieldLabel>
        <Textarea className='resize-none border-none outline-none shadow-md active:outline-none' value={formData.bio}
    onChange={(e) =>
        setFormData({
            ...formData,
            bio: e.target.value,
        })
    } required/>
      </Field>
    </FieldGroup>
    <CardFooter>
        <Field orientation="horizontal">
          
          <Button className = 'bg-green-400 text-gray-800 p-4' onClick={handleNext}>
            Next
          </Button>
        </Field>
      </CardFooter>
    </>
  )
}

export default Step1