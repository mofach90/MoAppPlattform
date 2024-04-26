import { Box, Typography } from "@mui/material";
import AccordionComponent from "./faqComponents/AccordionComponent";
import questionAnswer from "./faqComponents/Q&A.json"
const FAQ = () => {
  return (
    <Box>
      <Typography fontWeight={"bold"}  textAlign={"center"} padding={3} fontFamily={"sans-serif"} variant="h5" color={"white"}>
        Frequent Asked Questions
      </Typography>
      {questionAnswer.map((qa, i) => 
        (<AccordionComponent index={i} qa={qa} />)
      )}
    </Box>
  );
};

export default FAQ;
