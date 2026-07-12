
"use client"
import React from 'react'
import { FieldGroup, Field, FieldLabel } from './ui/field'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { CardFooter } from './ui/card'
import { Button } from './ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



const Step2 = ({step , update_step , formData , setFormData}) => {
  
  const items = [
  { label: "Select a Level", value: null },
  { label: "Beginner", value: 1 },
  { label: "Intermediate", value: 2 },
  { label: "Advance", value: 3 },
  { label: "Professional", value: 4 }
]
  return (
    <>

      <FieldGroup>
        <Field>
          <FieldLabel>
            Age
          </FieldLabel>
          <Input className='border-none outline-none shadow-md active:outline-none rounded-xl' type='Number' placeholder='Select Your Age' min={0} value={formData.age}
    onChange={(e) =>
        setFormData({
            ...formData,
            age: e.target.value,
        })
    } required/>
          <FieldLabel>
            Address
          </FieldLabel>
          <Input className='border-none outline-none shadow-md active:outline-none rounded-xl' type= 'text' placeholder='Enter Your full Address' value={formData.address}
    onChange={(e) =>
        setFormData({
            ...formData,
             address: e.target.value,
        })
    } required/>
          <FieldLabel>
            Favorite Sport 
          </FieldLabel>
          <Input className='border-none outline-none shadow-md active:outline-none rounded-xl' type= 'text' placeholder='Enter Your Favourite Sport' value={formData.sport}
    onChange={(e) =>
        setFormData({
            ...formData,
            sport: e.target.value,
        })
    } required/>
          <FieldLabel>
            Select Your Level 
          </FieldLabel>
          <Select items={items}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Level</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
        </Field>
      </FieldGroup>
      <CardFooter>
        <Field orientation="horizontal">
          <Button className = 'bg-red-500 text-gray-700 p-4' onClick={() => { update_step(step - 1) }}>Previous</Button>
          <Button className='bg-green-400 text-gray-800 p-4' onClick={() => { update_step(step + 1) }}>
            Next
          </Button>
        </Field>
      </CardFooter>
    </>
  )
}

export default Step2