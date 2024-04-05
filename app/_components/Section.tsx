import type { FC } from "react";
import styles from "./styles/section.module.css";
import { Grid } from "./Layout-Grid";

interface SectionProps {}

const Section: FC<SectionProps> = ({}) => {
  return (
    <div className={styles.sectionMain}>
      <Grid />
    </div>
  );
};
export default Section;
