"use client";
import { useEffect, useState } from "react";

export default function Checkout() {
  const [pedido, setPedido] = useState('');

  const inserirPedido = () => {
    const data = {
      "nomeCliente": "fulano",
      "emailCliente": "fulano@gmail.com",
      "telefoneCliente": "92984156896",
      "pagamento": {
        "tpoPagamento": 1,
        "pagamentoComCartao": {
          "numeroCartao": "0010010001028",
          "codigoSeguranca": "012",
          "dataVencimento": "07/29",
          "numeroParcelas": 3
        }
      },
      "carrinho": {
        "valorTotalPedido": 100.00,
        "produtos": [
          {
            "id": 1,
            "codigo": 100,
            "quantidade": 2
          },
          {
            "id": 1,
            "codigo": 100,
            "quantidade": 1
          }
        ]
      }
    }
    const url = "http://localhost:8085/pedido/submeter"
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log("response", response)
      }).catch(e => {
        console.log('erro: ', e)
      })

  }


  return (
    <main>

      <form onSubmit={postEvent}>
        <div>
          <label>Email</label>
          <input onChange={(e) setPedido(e.)} required type="text" name="email" placeholder="email@exemplo.com"></input>
      </div>

      <div>
        <label>Nome Completo</label>
        <input required type="text" name="" id="fullName" placeholder="Ex.: José da Silva"></input>
      </div>

      <div>
        <label>Celular</label>
        <input required type="text" name="" id="phone" placeholder="Ex.: (00) 00000-0000"></input>
      </div>

      <div>
        <div>
          <label for="cep">CEP</label>
          <input required type="text" name="" id="cep" placeholder="Ex.: 00000-000" />
        </div>

        <div>
          <label for="adress">Endereço</label>
          <input required type="text" name="" id="adress" placeholder="Ex.: Rua de exemplo" />
        </div>
      </div>

      <div>
        <div>
          <label for="adressNumber">Número</label>
          <input required type="text" name="" id="adressNumber" placeholder="Número" />
        </div>

        <div>
          <label for="adressNeighborhood">Bairro</label>
          <input required type="text" name="" id="adressNeighborhood" placeholder="Bairro" />
        </div>

        <div>
          <label for="adressComplement">Complemento</label>
          <input required type="text" name="" id="adressComplement" placeholder="Ex.: Ap 14" />
        </div>
      </div>

      <div>
        <label for="cardNumber">Número do cartão</label>
        <input required type="number" name="" id="cardNumber" placeholder="Ex.: 0000 0000 0000 0000" />
      </div>

      <div>
        <label for="cardHolder"
        >Nome do proprietário (como impresso no cartão)</label>
        <input required type="text" name="" id="cardHolder" placeholder="Ex.: José da Silva" />
      </div>

      <div>
        <label for="checkoutInstallments">Parcelas</label>
        <select name="checkoutInstallments" id="checkoutInstallments">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div>
        <label for="expirationDate">Validade</label>
        <input required type="date" name="" id="expirationDate" />
      </div>

      <div>
        <label for="cvv">CVV</label>
        <input required type="number" name="" id="cvv" placeholder="Ex.: 000" />
      </div>

      <div>
        <label for="sameAdressForBilling"
        >Usar endereço da entrega como endereço de cobrança</label>
        <input type="checkbox" id="sameAdressForBilling" />
      </div>
    </form>


    </main >

  )

}