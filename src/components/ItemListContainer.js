//* COMPONENTE ITEMLISTCONTAINER

import "./styles/ItemListContainer.css"

function ItemListContainer({greeting}) {
    return (
        <main>
        <section className="item-list">
            <h2>{greeting}</h2>
        </section>
        </main>
    )
}

export default ItemListContainer;