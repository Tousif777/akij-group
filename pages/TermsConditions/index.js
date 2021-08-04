import Head from "next/head";
import Layout from "../../components/Layout";
import TermsConditions from "../../components/TermsConditions/TermsConditions";

const index = () => {
  return (
    <Layout>
      <Head>
        <title>Akij Motors Faq - Best Motor Company in Bangladesh</title>
      </Head>
      <div>
        <TermsConditions />
      </div>
    </Layout>
  );
};

export default index;
