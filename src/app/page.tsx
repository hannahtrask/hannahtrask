"use client";
import Contact from "@/components/Contact";
import { useDisclosure } from "@mantine/hooks";
import { Button, Modal } from "@mantine/core";

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
            {/*<Socials />*/}
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
                fontWeight: "300",
                backgroundColor: `#fff`,
              }}
              onClick={open}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/*  IMAGE CAROUSEL */}

      {/*  WHO AM I BIO AND PHOTO */}
      <div>hey</div>
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
