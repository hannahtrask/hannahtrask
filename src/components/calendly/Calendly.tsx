"use client";
import { InlineWidget } from "react-calendly";
import styles from "./calendly.module.css";
import { motion } from "framer-motion";

export function Calendly() {
  return (
    <div className={styles.calendly}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.75, ease: "easeIn" }}
        viewport={{ once: true }}
      >
        <InlineWidget
          url="https://calendly.com/hannahcatherine/30min"
          styles={{ height: "800px" }}
        />
      </motion.div>
    </div>
  );
}
