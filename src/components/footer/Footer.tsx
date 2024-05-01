"use client";
import { Container, Group } from "@mantine/core";
import logo from "../../../public/assets/logo_white.png";
import classes from "./footer.module.css";
import Socials from "@/components/plop-anywhere/Socials";
import Image from "next/image";

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Image src={logo} alt="logo" width={200} />
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <Socials />
        </Group>
      </Container>
    </div>
  );
}
