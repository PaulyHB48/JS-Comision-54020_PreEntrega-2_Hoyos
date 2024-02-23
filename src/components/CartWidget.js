//* COMPONENTE CARTWIDGET

import "./styles/CartWidget.css"

function CartWidget({img}) {
    return (
        <div className="cart">
        <img src={img} alt="carrito" />
        0
        </div>

    )
}

export default CartWidget;