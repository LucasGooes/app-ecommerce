"use client";
import { CarrinhoContextProvider } from '@/contexts/CarrinhoContext';
import { ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <CarrinhoContextProvider>{children}</CarrinhoContextProvider>
  )
}