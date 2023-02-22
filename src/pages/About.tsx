import { Link, useSearchParams } from "react-router-dom";
//useSearchParams pegar o parametro da busca com react router dom

export const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      Pagina about - <Link to="/">Voltar home</Link>
      <h1>Lista dos envolvidos</h1>
      <ul>
        <li>
          <Link to={"pedro"}>Pedro</Link>
        </li>
        <li>
          <Link to={"kauan"}>Kauan</Link>
        </li>
      </ul>
    </div>
  );
};
