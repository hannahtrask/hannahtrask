import { Avatar } from "@/app/components/avatar";
import { Timeline } from "@/app/components/timeline";
import { ThemePicker } from "@/app/components/theme-picker";

export default function Home() {
  return (
    <main>
      <div className="hero min-h-screen bg-base-200">
        <div className="diff aspect-[16/9]">
          <div className="diff-item-1">
            <div className="bg-primary text-primary-content align-text-right text-9xl font-black grid place-content-center">
              HANNAH CATHERINE IS A CREATIVE
              <div className="text-xs grid ml-4">
                those that have tried, know it
              </div>
            </div>
          </div>
          <div className="diff-item-2">
            <div className="bg-base-200 text-9xl font-black grid place-content-center">
              HANNAH CATHERINE IS A WEB DEVELOPER
              <div className="text-xs grid ml-4">
                console.log(&apos;Hello, World!&apos;);
              </div>
            </div>
          </div>
          <div className="diff-resizer p-10"></div>
        </div>
      </div>
      <ThemePicker />
    </main>
  );
}
