import { Avatar } from "@/app/components/avatar";
import { Timeline } from "@/app/components/timeline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <input
          type="radio"
          name="theme-buttons"
          className="btn theme-controller join-item"
          aria-label="Light"
          value="light"
        />
        <input
          type="radio"
          name="theme-buttons"
          className="btn theme-controller join-item"
          aria-label="Cupcake"
          value="cupcake"
        />
        <input
          type="radio"
          name="theme-buttons"
          className="btn theme-controller join-item"
          aria-label="Retro"
          value="retro"
        />
        <input
          type="radio"
          name="theme-buttons"
          className="btn theme-controller join-item"
          aria-label="Aqua"
          value="aqua"
        />
        <input
          type="radio"
          name="theme-buttons"
          className="btn theme-controller join-item"
          aria-label="Dark"
          value="dark"
        />
      </div>
      <div className="avatar">
        <div className="w-24 mask mask-squircle">
          <Avatar id="avatar_1" alt="A portrait of me" />
        </div>
      </div>
      <Timeline />
    </main>
  );
}
