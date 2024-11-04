'use client'

import Invoice from "@/components/Inovice/Invoice";
import InvoiceForm from "@/components/InvoiceForm/InvoiceForm";
import { useState } from "react";
import { usePDF } from "react-to-pdf";

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
  const { toPDF, targetRef } = usePDF({ filename: `${Date.now()}-nota.pdf` });
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
      <InvoiceForm invoice={formValues} setInvoice={setFormValues} toPDF={toPDF}/>
      <Invoice invoice={formValues} targetRef={targetRef} />
    </main>
  );
}
