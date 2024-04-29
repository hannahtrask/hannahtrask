import Image from "next/image";
import profile from "../../../public/assets/profile-foto.png";
import classes from "./intro.module.css";

export function Intro() {
  return (
    <div className={classes.intro}>
      <Image
        src={profile}
        alt="photo of me"
        width={300}
        height={300}
        style={{ margin: `1rem` }}
      />
      <div>
        <h1>Who am I?</h1>
        <p>
          Hey, I’m Hannah. I’m a software engineer, content writer, and blogger—
          among other things. I’m a world traveler, language lover, jeweler,
          software engineer.. you name it. I thrive in environments where my
          projects are ever-changing, and I LOVE learning new things.
        </p>
      </div>
    </div>
  );
}
