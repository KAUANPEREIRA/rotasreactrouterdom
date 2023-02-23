import "./App.css";

import { RouterList } from "./components/RouterList";

//redirecionamento de rotas com react router dom utiliza o navigate
//pegar parametros de url useParams
//parametros de busca useSearchParams

function App() {
  return (
    <div className="App">
      <header>
        <h1>Titulo do site</h1>
      </header>
      <hr></hr>
      <div>
        <RouterList />
      </div>
      <hr></hr>
      <footer>Todos os direitos reservados</footer>
    </div>
  );
}

export default App;
