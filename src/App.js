import "bootstrap/dist/css/bootstrap.css"
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount"



function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={'¡Control your spaces!'} />
      <section>
        <div className="column is-4">
          <ItemCount/>
        </div>
      </section>
  
    </div>
  )
}

export default App;