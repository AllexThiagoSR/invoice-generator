// type Prop = {};

import { Textarea } from '@material-tailwind/react'
import { Input } from '../exports'

export default function InvoiceForm() {
  return (
    <form className='w-[35%] p-4 flex flex-col gap-2'>
      <Input
        crossOrigin={""}
        label="Cliente"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        name='clientName'      
      />
      <Input
        crossOrigin={''}
        label='Endereço'
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        name='address'
      />
      <Textarea
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        name='observations'
        label='Observações'    
      />
    </form>
  )
}