import Layout from "./components/shared/layout/Layout";
import Router from "./routes";

function App() {
  return (
    <Layout>
      <div className="">
        <Router />
      </div>
    </Layout>
  );
}

export default App;
