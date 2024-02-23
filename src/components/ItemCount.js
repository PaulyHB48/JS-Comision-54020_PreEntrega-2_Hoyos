//* COMPONENTE ITEMCOUNT

import "./styles/ItemCount.css"

import { useState } from 'react';

function ItemCount({ stock, onAdd }) {
    const [qty, setQty] = useState(0);

    function handleClickInc() {
        setQty(qty + 1);
    }

    function handleClickDec() {
        if (qty > 0) {
            setQty(qty - 1);
        }
    }

    return (
        <div>
            <div className="columns counter">
                <div className="column">
                    <button type="button" onClick={handleClickDec} class="btn btn-primary">
                        - <span class="badge text-bg-secondary"></span>
                    </button>
                </div>
                <div className="column qty-cart">
                    <span><p className="content is-medium">{qty}</p></span>
                </div>
                <div className="column">
                    <button type="button" onClick={handleClickInc} class="btn btn-primary">
                        + <span class="badge text-bg-secondary"></span>
                    </button>
                </div>
            </div>
            <div className="add-cart">
                <button type="button" onClick={() => onAdd(qty)} disabled={!stock} class="btn-cart btn-primary">
                    Agregar al carrito <span class="badge text-bg-secondary"></span>
                </button>
            </div>

        </div>


    )
}

export default ItemCount;


