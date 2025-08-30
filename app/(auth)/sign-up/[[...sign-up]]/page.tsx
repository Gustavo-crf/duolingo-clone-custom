import { redirect } from "next/navigation";

const SignUpPage = () => {
  // Redirecionar para a aplicação principal em vez de mostrar registro
  redirect("/learn");
};

export default SignUpPage;
