"use client";
import Image from "next/image";
import avatar from "../../public/assets/profile-foto.png";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";
import { theme } from "../../theme";
import { useDisclosure } from "@mantine/hooks";
import { Button, Modal } from "@mantine/core";

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <main
      style={{
        // @ts-ignore theme colors are defined
        backgroundColor: theme.colors.plum[1],
      }}
    >
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
              className="profile-image"
            />
          </div>
        </div>
      </div>
      <div className="contact-me">
        <Socials />
        <Modal size="xl" opened={opened} onClose={close} title="GET IN TOUCH">
          <Contact />
        </Modal>
        <Button variant="light" color="grape" onClick={open}>
          send me an email
        </Button>
      </div>
    </main>
  );
}
