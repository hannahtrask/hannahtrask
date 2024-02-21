import { Avatar } from "@/app/components/avatar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Light" value="light"/>
        <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Cupcake" value="cupcake"/>
        <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Retro" value="retro"/>
        <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Aqua" value="aqua"/>
        <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Dark" value="dark"/>
        {/*<button className="btn btn-primary">YayDaisyUIWorks</button>*/}
        {/*<button className="btn btn-primary">YayDaisyUIWorks</button>*/}
        {/*<button className="btn btn-primary">YayDaisyUIWorks</button>*/}
        {/*<button className="btn btn-primary">YayDaisyUIWorks</button>*/}
      </div>
      <div className="more-work">
        <div className="avatar">
          <div className="w-24 mask mask-squircle">
            <Avatar id="avatar_1" alt="A portrait of me" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-24 mask mask-hexagon">
            <Avatar id="avatar_2" alt="Another one" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-24 rounded-full">
            <Avatar id="avatar_3" alt="A third one" />
          </div>
        </div>
      </div>
      <ul className="steps steps-vertical">
        <li className="step">Be cute and switch themes because I am also chaotic and cute</li>
        <li className="step">Have some fun animations</li>
        <li className="step">Add a cute little game you can play to jump through my work</li>
        <li className="step">Show a mixture of Shopify projects and Wordpress and then some github projects</li>
        <li className="step">have a contact page</li>
        <li className="step">Use some API for something. idkkkk make it fun and cute though</li>
      </ul>
    </main>
  );
}
