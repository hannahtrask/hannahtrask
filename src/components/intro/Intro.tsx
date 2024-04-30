"use client";
import Image from "next/image";
import profile from "../../../public/assets/profile-foto.png";
import classes from "./intro.module.css";
import { motion } from "framer-motion";

export function Intro() {
  return (
    <div className={classes.intro}>
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src={profile}
          alt="photo of me"
          width={300}
          height={300}
          style={{ margin: `1rem` }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
      >
        <h1>Who am I?</h1>
        <p>
          Hey, I’m Hannah. I’m a software engineer, content writer, and blogger—
          among other things. I’m a world traveler, language lover, jeweler,
          software engineer.. you name it. I thrive in environments where my
          projects are ever-changing, and I LOVE learning new things.
        </p>
      </motion.div>
    </div>
  );
}
