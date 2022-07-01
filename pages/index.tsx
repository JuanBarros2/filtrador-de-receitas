import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div className="flex-col flex">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
