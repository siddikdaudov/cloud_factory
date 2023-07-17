import { Link, Outlet, useLocation } from "react-router-dom";
import { PATH_NAME, ROUTES } from "../constants";

const Root = () => {
  const route = useLocation();
  const title = PATH_NAME.get(route.pathname);
  const isRootPath = route.pathname === ROUTES.root;

  return (
    <div>
      <header>
        <h1 style={{ textAlign: "center" }}>{title}</h1>
      </header>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: "15px",
        }}
      >
        {isRootPath ? (
          <>
            <Link to={ROUTES.rate_a}>Котировки А</Link>
            <Link to={ROUTES.rate_b}>Котировки B</Link>
          </>
        ) : (
          <Link to={ROUTES.root}>Вернуться на главную страницу</Link>
        )}
      </nav>
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
