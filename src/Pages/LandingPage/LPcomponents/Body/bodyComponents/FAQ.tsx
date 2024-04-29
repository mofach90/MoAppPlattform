import { Box, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import data from "../../../../../data/Q&A.json";
import AccordionComponent from "./faqComponents/AccordionComponent";
const FAQ = () => {
  return (
    <Box>
      <Typography
        fontWeight={"bold"}
        textAlign={"center"}
        padding={3}
        fontFamily={"sans-serif"}
        variant="h5"
        color={"white"}
      >
        Frequent Asked Questions
      </Typography>
      {data.map((qa, i) => (
        <AccordionComponent key={uuidv4()} index={i} qa={qa} />
      ))}
    </Box>
  );
};

export default FAQ;
