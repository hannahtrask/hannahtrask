"use client";
import Contact from "@/components/Contact";
import profile from "../../public/assets/profile-foto.png";
import { useDisclosure } from "@mantine/hooks";
import { Button, Modal } from "@mantine/core";
import Image from "next/image";

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <main>
      <div className="header">
        <div className="intro-splash">
          <p>HANNAH</p>
          <p>DESIGNS</p>
          <p>BLOGS</p>
          <p>ENGINEERS</p>
          <p>DEVELOPS</p>
        </div>
        <div className="intro-paragraph">
          <p>
            I’m a software engineer, among other things. Need copy? Need a
            Shopify store? Want to talk about a project and see if we’d vibe?
            Contact me via email, LinkedIn, or Instagram.
          </p>
          <div>
            <Modal
              size="xl"
              opened={opened}
              onClose={close}
              title="GET IN TOUCH"
            >
              <Contact />
            </Modal>
            <Button
              style={{
                border: `.5px solid #000`,
                color: `#000`,
                fontWeight: `300`,
                backgroundColor: `#fff`,
              }}
              onClick={open}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      <div className="intro">
        <div>
          <h1>Who am I?</h1>
          <p>
            Hey, I’m Hannah. I’m a software engineer, content writer, and
            blogger, among other things. I’m a world traveler, language lover,
            jeweler, software engineer.. you name it. I thrive in environments
            where my projects are ever-changing, and I LOVE learning new things.
          </p>
        </div>
        <Image
          src={profile}
          alt="photo of me"
          width={300}
          height={300}
          style={{ margin: `1rem` }}
        />
      </div>
      {/*  INTEGRATE CONTENTFUL FOR IMAGES */}
      {/*<div className="image-carousel">*/}
      {/*  <Paper shadow="sm" p="xl" radius="sm" />*/}
      {/*  <Paper shadow="sm" p="xl" radius="sm" />*/}
      {/*  <Paper shadow="sm" p="xl" radius="sm" />*/}
      {/*  <Paper shadow="sm" p="xl" radius="sm" />*/}
      {/*</div>*/}

      {/*>*/}
      {/*  <div className="main-body">*/}
      {/*    <div className="intro-title">*/}
      {/*      <div className="slide-in-left">*/}
      {/*        <h1>Hey, I&apos;m Hannah!</h1>*/}
      {/*        <p>I&apos;m a software engineer.</p>*/}
      {/*        <h6>(among other things)</h6>*/}
      {/*      </div>*/}
      {/*      <div className="slide-in-right">*/}
      {/*        <Image*/}
      {/*          src={avatar}*/}
      {/*          alt="absolutely ripping a backside turn"*/}
      {/*          width={300}*/}
      {/*          height={300}*/}
      {/*          className="profile-image"*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
    </main>
  );
}
