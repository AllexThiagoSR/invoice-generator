import { InvoiceInfos } from '@/app/page';
import { Typography } from '@material-tailwind/react';
import Image from 'next/image';
import React from 'react';

const TABLE_HEAD: string[] = ['QUANT.', 'DESCRIÇÃO', 'PREÇO UNIT.', 'TOTAL'];

type Props = {
  invoice: InvoiceInfos,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  targetRef: React.MutableRefObject<any>,
};

function Invoice({ invoice, targetRef }: Props) {

  return (
    <section ref={targetRef} className='relative h-[100vh] w-[50%] p-10 flex flex-col gap-1'>
      <header className='flex gap-2'>
        <div className='flex gap-2 border border-black p-2 grow rounded-lg'>
          <Image
            src="/logo.jpg"
            width={100}
            height={100}
            alt={''}
          />
          <div>
            <h3>
              Cristiano Sobral
            </h3>
            <p className='text-[16px]'>Sobral Soldas</p>
            <p className='text-[16px]'>(94) 99181-7094</p>
          </div>
        </div>
        <div className='flex items-center justify-between border border-black p-2 rounded-lg flex-col'>
          <h3>
            NOTA
          </h3>
          <p><span className='font-bold'>Data:</span><span>{new Date().toLocaleDateString('pt-BR')}</span></p>
        </div>
      </header>
      <section className='border border-black p-2 rounded-lg'>
        <p><span className='font-bold'>Cliente: </span><span>{invoice.clientName}</span></p>
        <p><span className='font-bold'>Endereço: </span><span>{invoice.address}</span></p>
        <div className='flex flex-wrap gap-2'>
          <p className='min-w-[150px]'><span className='font-bold'>Bairro: </span><span>{invoice.neighborhood}</span></p>
          <p className='min-w-[150px]'><span className='font-bold'>Cidade: </span><span>{invoice.city}</span></p>
          <p className='min-w-[150px]'><span className='font-bold'>Telefone/Celular: </span><span>{invoice.cellphone}</span></p>
        </div>
      </section>
      <section className='border border-black rounded-lg overflow-hidden'>
        <table className="w-full min-w-max table-auto text-center rounded-lg overflow-hidden">
          <thead className='border border-black'>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className={`bg-black p-2 w-fit ${head !== 'TOTAL' ? 'border-r border-white' : ''} ${head === 'DESCRIÇÃO' ? 'w-[500px]' : ''}`}
                >
                  <Typography
                    variant="small"
                    color="white"
                    className="font-bold"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='border border-black h-[500px]'>
            {invoice.services.map(({ quantity, description, unitPrice }, index) => {
              return (
                <tr key={'row-' + index} className='rounded-lg'>
                  <td className={' min-h-[20px] border border-black'}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {quantity}
                    </Typography>
                  </td>
                  <td className={' min-h-[20px] border border-black'}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal" 
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {description}
                    </Typography>
                  </td>
                  <td className={' min-h-[20px] border border-black'}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {unitPrice.toFixed(2)}
                    </Typography>
                  </td>
                  <td className={' min-h-[20px] border border-black'}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {(unitPrice * quantity).toFixed(2)}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section className='w-fit self-end border border-black rounded-lg overflow-hidden pr-2'>
        <p className='flex items-center gap-2'>
          <span className='border-r border-black p-2'>
            TOTAL
          </span>
          R$ {invoice.services.reduce((acc, { quantity, unitPrice }) => acc + (quantity * unitPrice), 0).toFixed(2).replace('.', ',')}
        </p>
      </section>
      <footer className='flex h-[80px] items-end justify-around border border-black p-2 pb-1 rounded-lg'>
        <div className='flex items-center w-[40%] flex-col'>
          <hr className='border-b border-dotted border-black w-[100%]'/>
          <Typography variant='small' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Ass. Cliente</Typography>
        </div>
        <div className='flex items-center w-[40%] flex-col'>
          <hr className='border-b border-dotted border-black w-[100%]'/>
          <Typography variant='small' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Ass. Vendedor</Typography>
        </div>
      </footer>
    </section>
  );
}

export default Invoice;