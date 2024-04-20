import {
  InstagramIcon,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import React from "react";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="socials">
      <LinkedinShareButton
        url={"https://www.linkedin.com/in/hannahtrask/"}
        style={{ margin: "5px" }}
      >
        <LinkedinIcon size={32} round bgStyle={{ fill: "black" }} />
      </LinkedinShareButton>
      <WhatsappShareButton
        url={"https://wa.link/cmibd5"}
        style={{ margin: "5px" }}
      >
        <WhatsappIcon size={32} round bgStyle={{ fill: "black" }} />
      </WhatsappShareButton>
      <PinterestShareButton
        url={"https://www.pinterest.com/hellaahannah/"}
        media={"some style vibes"}
        style={{ margin: "5px" }}
      >
        <PinterestIcon size={32} round bgStyle={{ fill: "black" }} />
      </PinterestShareButton>
      <Link
        href={"https://www.instagram.com/hannah_____catherine/"}
        style={{ margin: "5px" }}
        target="_blank"
      >
        <InstagramIcon size={32} round bgStyle={{ fill: "black" }} />
      </Link>
    </div>
  );
}
