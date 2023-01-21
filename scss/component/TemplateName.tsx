import {FC} from "react";
import styles from "./TemplateName.module.scss";

export interface TemplateNameProps {}

const TemplateName: FC<TemplateNameProps> = (props) => {
  
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component
    </div>
  );
};

export default TemplateName;
