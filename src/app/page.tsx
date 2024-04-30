import { Footer } from "@/components/footer/Footer";
import { Intro } from "@/components/intro/Intro";
import { ContactButton } from "@/components/contact/contact-button";
import { Calendly } from "@/components/calendly/Calendly";

export default function Home() {
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
              I’m a software engineer and web developer (among other things).
              <br />
              <br />
              Need copy? Need a Shopify store? Struggling with some pesky apps
              or plugins and just need an experienced hand?
            </p>
            <ContactButton />
          </div>
        </div>
        {/*<Carousel />*/}
      </main>
      <Intro />
      <Calendly />
      <Footer />
    </>
  );
}
