import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const AuthPage: NextPage = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  React.useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>Get Started / ChatCX</title>
      </Head>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="logo.png"
            alt="ChatCX"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            ChatCX
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <Auth
            supabaseClient={supabaseClient}
            appearance={{ theme: ThemeSupa }}
            providers={[]}
          />
        </div>
      </div>
    </>
  );
};

export default AuthPage;
