import React from 'react';
import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Get 440 | Page not found</title>
        <meta name="robots" content="noindex" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="text-6xl font-bold">404</p>
        <h1 className="mt-4 text-2xl font-semibold">Page not found</h1>
        <p className="mt-2 text-gray-600">The page you are looking for doesn&apos;t exist or has moved.</p>
        <Link href="/" className="mt-8 rounded-full bg-black px-6 py-3 text-white">Back to home</Link>
      </main>
    </>
  );
};

export default NotFound;
