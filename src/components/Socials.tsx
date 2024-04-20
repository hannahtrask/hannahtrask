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
      <LinkedinShareButton url={"https://www.linkedin.com/in/hannahtrask/"}>
        <LinkedinIcon size={32} round bgStyle={{ fill: "grey" }} />
      </LinkedinShareButton>
      <WhatsappShareButton url={"https://wa.link/cmibd5"}>
        <WhatsappIcon size={32} round bgStyle={{ fill: "grey" }} />
      </WhatsappShareButton>
      <PinterestShareButton
        url={"https://www.pinterest.com/hellaahannah/"}
        media={"some style vibes"}
      >
        <PinterestIcon size={32} round bgStyle={{ fill: "grey" }} />
      </PinterestShareButton>
      <Link href={"https://www.instagram.com/hannah_____catherine/"}>
        <InstagramIcon size={32} round bgStyle={{ fill: "grey" }} />
      </Link>
    </div>
  );
}
