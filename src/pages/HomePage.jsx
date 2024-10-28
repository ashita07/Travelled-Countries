import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
// import AppNav from "../components/AppNav";

function HomePage() {
  return (
    <div>
      {/* <AppNav /> */}
      <PageNav />
      <h1>WorldWise</h1>
      <Link to="applayout">AppLayout</Link>
    </div>
  );
}

export default HomePage;
