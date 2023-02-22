import { useNavigate } from "react-router-dom";

//useNavigate navegação em paginas

type Props = {
  children: JSX.Element;
};

export const RequireAuth = ({ children }: Props) => {
  const navigate = useNavigate();
  const isAuth = true;

  if (isAuth) {
    return children;
  } else {
    navigate("/error");
    return null;
  }
};
