import Layout from "components/Layout";
import Filter from "components/Filter";

export default function Home() {
  return <Filter />;
}

Home.getLayout = function getLayout(page) {
  return <Layout item="home">{page}</Layout>;
};
