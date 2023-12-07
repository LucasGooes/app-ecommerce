"use client";

import { Produto } from '@/types/Produto';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface CarrinhoContextProviderProps {
  produtosSelecionados: Produto[];
  setProdutosSelecionado: Dispatch<SetStateAction<Produto[]>>;
}

const ProdutosSelecionadosContext = createContext<CarrinhoContextProviderProps>(
  {} as CarrinhoContextProviderProps
);

export const CarrinhoContextProvider = ({ children }: { children: ReactNode }) => {
  const [produtosSelecionados, setProdutosSelecionado] = useState<Produto[]>([]);
  return (
    <ProdutosSelecionadosContext.Provider value={{ produtosSelecionados, setProdutosSelecionado }}>{children}</ProdutosSelecionadosContext.Provider>
  );
};

export const useCarrinhoContext = () => {
  const carrinhoContext = useContext(ProdutosSelecionadosContext);

  if (carrinhoContext === undefined) {
    throw new Error(
      "CarrinhoContext só pode ser usado dentro de CarrinhoContextProvider"
    );
  }
  return carrinhoContext;
};