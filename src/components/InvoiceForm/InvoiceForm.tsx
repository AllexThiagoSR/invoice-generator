// import { Textarea } from '@material-tailwind/react'
import { Input } from '../exports'
import { InvoiceInfos } from '@/app/page'
import { Button, List, ListItem } from '@material-tailwind/react';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

type Props = {
  invoice: InvoiceInfos,
  setInvoice: Dispatch<SetStateAction<InvoiceInfos>>;
}

export default function InvoiceForm({invoice, setInvoice}: Props) {
  const [service, setService] = useState<{ quantity: number, description: string, unitPrice: number }>({ quantity: 0,  description: '', unitPrice: 0 });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
  };

  const addService = () => {
    if (service.quantity && service.unitPrice && service.description) {
      setInvoice({ ...invoice, services: [...invoice.services, service]})
      setService({ quantity: 0,  description: '', unitPrice: 0 });
      return;
    }
    alert('Todos os campos(Quantidade, Preço Unitário e Descrição devem estar preenchidos para conseguir adicionar um novo serviço)')
  }

  const removeService = (index: number) => {
    setInvoice({ ...invoice, services: invoice.services.filter((_, i) => index !== i)})
  }

  return (
    <form className='w-[40%] p-4 flex flex-col gap-2'>
      <Input
        crossOrigin={""}
        label="Cliente"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        value={invoice.clientName}
        name='clientName'
        onChange={handleChange} 
      />
      <Input
        crossOrigin={''}
        label='Endereço'
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        value={invoice.address}
        onChange={handleChange} 
        name='address'
      />
      <Input
        crossOrigin={""}
        label="Bairro"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        value={invoice.neighborhood}
        name='neighborhood'
        onChange={handleChange} 
      />
      <Input
        crossOrigin={''}
        label='Cidade'
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        value={invoice.city}
        onChange={handleChange} 
        name='city'
      />
      <Input
        crossOrigin={""}
        label="Telefone/Celular"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        value={invoice.cellphone}
        name='cellphone'
        onChange={handleChange} 
      />
      <div className='flex gap-1 items-center w-[100%]'>
        <Input
          containerProps={{
            className: 'w-[150px]'
          }}
          labelProps={{
            className: '150px'
          }}
          crossOrigin={""}
          label="Quantidade"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          value={service.quantity}
          onChange={({ target }) => {setService({ ...service, quantity: parseInt(target.value) })}}
          type='number'
        />
        <Input
          containerProps={{
            className: 'w-[150px]'
          }}
          labelProps={{
            className: '150px'
          }}
          crossOrigin={""}
          label="Preço Unitário"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          value={service.unitPrice}
          onChange={({ target }) => {setService({ ...service, unitPrice: parseFloat(target.value) })}}
          type='number'
        />
        <Input
          crossOrigin={""}
          label="Descrição"
          containerProps={{
            className: 'w-[150px]'
          }}
          labelProps={{
            className: '150px'
          }}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          value={service.description}
          onChange={({ target }) => {setService({ ...service, description: target.value })}}
        />
        <Button
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          type='button'
          onClick={addService}
        >
          Adicionar serviço
        </Button>
      </div>
      <List placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        {
          invoice.services.map((service, index) => (
            <ListItem
              key={'service-'+index}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              className='border border-black justify-between'
            >
              <div className='flex flex-col'>
                <p className='text-black'>Quantidade: {service.quantity}</p>
                <p className='text-black'>Preço Unitário: R$ {service.unitPrice.toFixed(2).replace('.', ',')}</p>
                <p className='text-black'>Descrição: {service.description}</p>
              </div>
              <Button
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                type='button'
                onClick={() => removeService(index)}
              >
                X
              </Button>
            </ListItem>
          ))
        }
      </List>
      <Button
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        className='self-center'
        type='button'
      >
        Salvar
      </Button>
    </form>
  )
}