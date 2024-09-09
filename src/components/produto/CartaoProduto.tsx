'use client';

import useCarrinho from '@/data/hooks/useCarrinho';
import Produto from '@/data/model/Produto';
import Image from 'next/image';
import { useEffect } from 'react'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface CartaoProdutoProps {
  produto: Produto;
}

export default function CartaoProduto({ produto }: CartaoProdutoProps) {
  const { adicionar } = useCarrinho();

  if (!produto) {
    console.error('Produto não está definido.');
    return null;
  }

  const { nome, descricao, preco, imagem } = produto;

  const handleAdicionarProduto = () => {
    if (adicionar) {
      adicionar(produto);

      toast.success(`${nome} adicionado ao carrinho!`);
    } else {
      console.error("A função 'adicionar' não está definida.");
    }
  };

  return (
    <div className="flex flex-col w-72 bg-zinc-900">
      <div className="relative w-72 h-52">
        <Image
          src={imagem}
          alt={nome}
          fill
          className="object-cover"
          onError={() => console.error('Erro ao carregar imagem.')}
        />
      </div>
      <div className="flex-1 flex flex-col gap-4 p-5">
        <h2 className="text-xl font-bold">{nome}</h2>
        <p className="flex-1 text-sm text-zinc-400">{descricao}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold mt-2">
            R$ {typeof preco === 'number' ? preco.toFixed(2) : '0.00'}
          </span>
          <button
            onClick={handleAdicionarProduto}
            className="border rounded-full px-5 py-1 text-sm transition-colors duration-300 hover:bg-green-500 hover:text-white"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
