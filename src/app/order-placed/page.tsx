"use client";
import { Footer } from "@/components/footer";
import { HeaderCheckout } from "@/components/header-checkout";
import { TopBar } from "@/components/topbar";

interface OrderPlacedPageProps {}
export default function OrderPlacedPage(props: OrderPlacedPageProps) {
  return (
    <>
      <TopBar />
      <HeaderCheckout info info2 />
      <main
        className="checkout-container container success"
        style={{ width: "100%" }}
      >
        <h1 className="checkout-success__title">
          Pedido finalizado com sucesso
        </h1>
        <span className="checkout-success__icon material-symbols-outlined">
          {" "}
          check_circle{" "}
        </span>
        <span className="checkout-success__info">
          Recebemos seu pedido com sucesso, em breve você receberá em seu e-mail
          as informações de confirmação e de acompanhamento
        </span>
        <span className="checkout-success__order-number">
          Pedido nº <strong id="orderNumber">985267220200-4</strong>
        </span>
      </main>
      <Footer />
    </>
  );
}
