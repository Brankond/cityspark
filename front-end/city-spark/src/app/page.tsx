import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="transition-colors duration-500 ease-in-out text-9xl font-black hover:text-lime-300">
        CITY SPARK V0.3
      </h1>
      <div className="grid grid-cols-3 gap-3 text-xl mt-5">
        <Link href="/auth/login">
          <p className="transition-colors duration-500 ease-in-out hover:text-lime-300 tracking-widest">
            LOGIN
          </p>
        </Link>
        <div className="flex justify-center">
          <div className="w-0.5 bg-slate-300"></div>
        </div>
        <Link href="/auth/signup">
          <p className="transition-colors duration-500 ease-in-out hover:text-lime-300 tracking-widest">
            SIGNUP
          </p>
        </Link>
      </div>
    </main>
  );
}
