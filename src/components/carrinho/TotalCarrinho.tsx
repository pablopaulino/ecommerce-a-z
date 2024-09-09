import React, { useContext } from 'react';
import ItemCarrinho from '@/data/model/ItemCarrinho';
import ContextoCarrinho from '@/data/contexts/ContextoCarrinho';
 

export interface TotalCarrinhoProps {
    itens: ItemCarrinho[];
}

export default function TotalCarrinho(props: TotalCarrinhoProps) {
    const { limpar } = useContext(ContextoCarrinho); 

    const total = props.itens.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0);

    const finalizarCompra = () => {
        alert(`Total da compra é de: R$ ${total.toFixed(2)} Obrigado volte sempre!`);
        
        limpar();
    }

    return (
        <div className="flex items-center justify-between bg-zinc-900 rounded-md p-7">
            <div className="flex flex-col justify-between">
                <span className="text-zinc-500">Total</span>
                <span className="text-3xl font-bold text-yellow-500">R$ {total.toFixed(2)}</span>
            </div>
            <button 
                onClick={finalizarCompra}  
                className="bg-green-600 px-4 py-2 rounded-md text-xl"
            >
                Finalizar
            </button>
        </div>
    );
}
