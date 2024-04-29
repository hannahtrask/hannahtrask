"use client";
import { Button, Modal } from "@mantine/core";
import Contact from "@/components/plop-anywhere/Contact";
import { useDisclosure } from "@mantine/hooks";

export function ContactButton() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <Modal size="xl" opened={opened} onClose={close} title="GET IN TOUCH">
        <Contact />
      </Modal>
      <Button
        style={{
          border: `.5px solid #000`,
          color: `#000`,
          fontWeight: `300`,
          backgroundColor: `#fff`,
        }}
        onClick={open}
      >
        Get In Touch
      </Button>
    </div>
  );
}
