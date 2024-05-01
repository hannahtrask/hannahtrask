import { Footer } from "@/components/footer/Footer";
import { Intro } from "@/components/intro/Intro";
import { ContactButton } from "@/components/contact/contact-button";
import { Calendly } from "@/components/calendly/Calendly";
// import { Portfolio } from "@/components/portfolio/Portfolio";

export default function Home() {
  return (
    <>
      <main>
        <div className="header">
          <div className="intro-splash">
            <p>HANNAH</p>
            <p>DEVELOPS</p>
            <p>BLOGS</p>
            <p>DESIGNS</p>
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
      </main>
      <Intro />
      {/*<Portfolio />*/}
      <Calendly />
      <Footer />
    </>
  );
}
