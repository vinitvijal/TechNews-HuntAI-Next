import Image from "next/image";
import Link from "next/link";
import { FaFire, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main className=" min-h-screen w-full bg-zinc-950">
      <section className=" w-full">
        <header className=" h-16 w-full flex justify-center items-center gap-24 bg-black">
        <Link href="/" className=""><FaGithub className="text-3xl"/></Link>
        <Link href="/" className=""><FaInstagram className=" text-3xl"/></Link>
        <Link href="/" className=" "><FaTwitter className=" text-3xl"/></Link>
        </header>
        <div className=" h-96  flex flex-col justify-center items-center select-none">
          <h1 className=" flex font-semibold bg-gradient-to-b from-purple-100 to-purple-400 bg-clip-text text-transparent justify-center items-center text-7xl">HuntAI <FaFire className="  text-orange-400"/></h1>
          <h3 className="text-zinc-400"><span className=" font-semibold text-zinc-200">News to Tweets</span>: Your AI-Powered Social Media Maestro!</h3>
        </div>
      </section>
      <section className=" min-h-screen w-full ">

      </section>
    </main>
  );
}
