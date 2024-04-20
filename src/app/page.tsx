"use client";
import Image from "next/image";
import avatar from "../../public/assets/profile-foto.png";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main>
      <div className="main-body">
        <div className="intro-title">
          <div className="slide-in-left">
            <h1>Hey, I&apos;m Hannah!</h1>
            <p>I&apos;m a software engineer.</p>
            <h6>(among other things)</h6>
          </div>
          <div className="slide-in-right">
            <Image
              src={avatar}
              alt="absolutely ripping a backside turn"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <Socials />
    </main>
  );
}
