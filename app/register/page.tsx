"use client"

import React from 'react'
import { useState } from 'react'
import Step1 from '@/components/Step1'
import Step2 from '@/components/Step2'
import { Card, CardHeader, CardDescription, CardTitle } from '@/components/ui/card'
import Step3 from '@/components/Step3'



const page = () => {
      const [formData, setFormData] = useState({
  username: "",
  fullname: "",
  bio: "",
  age: "",
  address: "",
  sport: "",
  level: "",
  email: "",
  password: "",
});
  const [Step, setStep] = useState<Number>(1)
  return (
    <div className='min-h-screen flex items-center justify-center p-4'>

      <Card className="w-full sm:max-w-md p-4 border-none shadow-md outline-none">
        {
          Step == 1 && (
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                This is for your Profile Information
              </CardDescription>
            </CardHeader>
          )
        }
        {
          Step == 2 && (
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                This is for your Profile Information
              </CardDescription>
            </CardHeader>
          )
        }
        {
          Step == 3 && (
            <CardHeader>
              <CardTitle>Validation Information</CardTitle>
              <CardDescription>
                This is for your Validation
              </CardDescription>
            </CardHeader>
          )
        }


        <form
    onSubmit={(e)=>e.preventDefault()}
 className='space-y-4'>
          {
            Step == 1 && (<Step1
              step={Step}
              update_step={setStep}
              formData={formData}
              setFormData={setFormData}
            />)
          }
          {
            Step == 2 && (<Step2
              step={Step}
              update_step={setStep}
              formData={formData}
              setFormData={setFormData}
            />)
          }
          {
            Step == 3 && (<Step3
              step={Step}
              update_step={setStep}
              formData={formData}
              setFormData={setFormData}
            />)
          }
        </form>
      </Card>

    </div>
  )
}

export default page