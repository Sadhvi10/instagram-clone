import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className='bg-gray-50 h-screen'>
      <Head>
        <title>Instagram</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      {/* Feed */}
      {/* Modal */}
    </div>
  );
}
