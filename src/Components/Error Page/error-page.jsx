import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page ">
      <h1 className="text-center">ehhheeeee!!!!!!!</h1>
      <h1 className="fs-1 text-center">an unexpected error has occurred.</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>Custom error element!!!!!!!</p>
    </div>
  );
}