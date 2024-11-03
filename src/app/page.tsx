'use client'

import Invoice from "@/components/Inovice/Invoice";
import InvoiceForm from "@/components/InvoiceForm/InvoiceForm";
import { useState } from "react";

export type InvoiceInfos = {
  clientName: string,
  address: string,
  observations: string,
  neighborhood: string,
  city: string,
  cellphone: string,
  services: {
    quantity: number,
    description: string,
    unitPrice: number,
  } []
};

export default function Home() {
  const [formValues, setFormValues] = useState<InvoiceInfos>({
    clientName: '',
    address: '',
    observations: '',
    neighborhood: '',
    city: '',
    cellphone: '',
    services: [],
  });

  return (
    <main className="flex justify-between">
      <InvoiceForm invoice={formValues} setInvoice={setFormValues}/>
      <Invoice invoice={formValues} />
    </main>
  );
}
