"use client";
import { Pedido } from '@/types/Pedido';
import { useEffect, useState } from "react";

export default function Checkout() {
  const [pedido, setPedido] = useState();

  const inserirPedido = () => {
    const url = "http://localhost:8085/pedido/submeter"
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: pedido
      }),
    })
  }

  const handleSubmit = () => {
    inserirPedido()
  }

  return (
  )

}