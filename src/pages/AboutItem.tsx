import React from "react";
import { useParams,useNavigate } from "react-router-dom";

//sem utilizar next utilizar useNavigate para navegar nas paginas
//useParams pegar parametros dinaminicoms como  no exemplo o slug

export const AboutItem = () => {

  const params = useParams();
  const navigate = useNavigate();


  //funcão para voltar para pagina anterior
  const handleBackButton = ()=>{
    navigate(-1)
  }

  const handleButtonHome = ()=>{
    navigate("/")
  }

  return (
    <div>
      Pagina about
      <h1>Sobre {params.slug}</h1>
      <p>valores dinamicos</p>
      <hr></hr>
      <button onClick={handleBackButton}>Voltar d</button>
      <button onClick={handleButtonHome}>Voltar home</button>
    </div>
  );
};
