import Box from "@mui/material/Box";
import { FC } from "react";
import styles from "./TemplateName.module.css";

interface TemplateNameProps {}

const TemplateName: FC<TemplateNameProps> = (props) => {

  return (
    <Box className={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component
    </Box>
  );
};

export default TemplateName;
