import Box from "@mui/material/Box";
import {FC} from "react";
import styles from "./TemplateName.jss";

export interface TemplateNameProps {}

const TemplateName: FC<TemplateNameProps> = (props) => {
  
  return (
    <Box sx={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component
    </Box>
  );
};

export default TemplateName;
