'use client'

import Invoice from "@/components/Inovice/Invoice";
import InvoiceForm from "@/components/InvoiceForm/InvoiceForm";

export default function Home() {
  return (
    <main className="flex justify-between">
      <InvoiceForm/>
      <Invoice />
    </main>
  );
}
