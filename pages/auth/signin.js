import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";
import { FcGoogle } from "react-icons/fc";
function SignIn({ providers }) {
  return (
    <div className='bg-[#fafafa] min-h-screen'>
      <Header />
      <div className='flex min-h-screen flex-col items-center justify-center py-2 mb-2 -mt-14 px-14 text-center'>
        <img
          className='w-80'
          src='https://links.papareact.com/ocw'
          alt='instagram logo'
        />
        <img
          className='h-80'
          src='/insta-logo.png'
          alt='instagram mobile logo'
        />

        <div className='mt-10'>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className='flex items-center gap-3 p-3 bg-[#F1F7FF] shadow-sm rounded-lg text-gray-900 font-semibold border border-blue-400 tracking-tight'
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                <FcGoogle className='h-[22px] w-[22px]' /> Sign in with{" "}
                {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default SignIn;
