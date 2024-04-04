import type { FC } from "react";
import styles from "./styles/section.module.css";

interface SectionProps {}

const Section: FC<SectionProps> = ({}) => {
  return <div className={styles.sectionMain}></div>;
};
export default Section;
