import { redirect } from "next/navigation";

const SignInPage = () => {
  // Redirecionar para a aplicação principal em vez de mostrar login
  redirect("/learn");
};

export default SignInPage;
