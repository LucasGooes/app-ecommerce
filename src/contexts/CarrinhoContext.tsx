"use client";

import { Produto } from "@/types/Produto";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface CarrinhoContextProviderProps {
  produtosSelecionados: {
    produto: Produto;
    quantidade: number;
  }[];
  setProdutosSelecionado: Dispatch<
    SetStateAction<{ produto: Produto; quantidade: number }[]>
  >;
}

const ProdutosSelecionadosContext = createContext<CarrinhoContextProviderProps>(
  {} as CarrinhoContextProviderProps
);

export const CarrinhoContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [produtosSelecionados, setProdutosSelecionado] = useState<
    { produto: Produto; quantidade: number }[]
  >([]);
  return (
    <ProdutosSelecionadosContext.Provider
      value={{ produtosSelecionados, setProdutosSelecionado }}
    >
      {children}
    </ProdutosSelecionadosContext.Provider>
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
