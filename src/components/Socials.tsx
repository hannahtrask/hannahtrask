import {
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import React from "react";

export default function Socials() {
  return (
    <div className="slide-in-left">
      <LinkedinShareButton url={"https://www.linkedin.com/in/hannahtrask/"}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <WhatsappShareButton url={"https://wa.link/cmibd5"}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <PinterestShareButton url={"https://www.pinterest.com/hellaahannah/"} media={'some style vibes'}>
        <PinterestIcon size={32} round />
      </PinterestShareButton>
    </div>
  );
}
