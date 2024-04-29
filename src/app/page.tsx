import { Footer } from "@/components/footer/Footer";
import { Intro } from "@/components/intro/Intro";
import { ContactButton } from "@/components/contact/contact-button";

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
              I’m a software engineer, among other things. Need copy? Need a
              Shopify store? Want to talk about a project and see if we’d vibe?
              Contact me via email, LinkedIn, or Instagram.
            </p>
            <ContactButton />
          </div>
        </div>
        {/*<Carousel />*/}
      </main>
      <Intro />
      <Footer />
    </>
  );
}
