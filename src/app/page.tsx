"use client";
import Contact from "@/components/plop-anywhere/Contact";
import { useDisclosure } from "@mantine/hooks";
import { Button, Modal } from "@mantine/core";
import { Footer } from "@/components/footer/Footer";
import { Intro } from "@/components/intro/Intro";

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
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
        {/*  INTEGRATE CONTENTFUL FOR IMAGES */}
        {/*<div className="image-carousel">*/}
        {/*  <Paper shadow="sm" p="xl" radius="sm" />*/}
        {/*  <Paper shadow="sm" p="xl" radius="sm" />*/}
        {/*  <Paper shadow="sm" p="xl" radius="sm" />*/}
        {/*  <Paper shadow="sm" p="xl" radius="sm" />*/}
        {/*</div>*/}
      </main>
      <Intro />
      <Footer />
    </>
  );
}
