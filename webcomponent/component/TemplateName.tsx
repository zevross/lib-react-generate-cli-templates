import {FC} from "react";
import styles from "./TemplateName.jss.ts";

export interface TemplateNameProps {}

const TemplateName: FC<TemplateNameProps> = (props) => {
  
  return (
    <div sx={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component
    </div>
  );
};

export default TemplateName;
