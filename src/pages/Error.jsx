import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  if (error.status == 404) {
    return <section>
      <h2>Page not found</h2>
    </section>
  }
  return <h1>There was an error</h1>
}
export default Error;