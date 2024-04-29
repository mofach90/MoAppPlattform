import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

const AccordionComponent = (props: any) => {
  return (
    <Accordion sx={{ opacity: 0.9 }}>
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon
            sx={{
              color: "darkblue",
              "&:hover": {
                color: "white",

                backgroundColor: "darkblue",
                borderRadius: 10,
              },
            }}
          />
        }
      >
        <Typography fontWeight={"bold"} color={"darkblue"}>
          {props.qa.question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          background:
            "linear-gradient(to right, rgb(240, 255, 255),rgb(170,255,255))",
          borderRadius: 1,
        }}
      >
        <Typography color={"darkblue"} variant="body2">
          {props.qa.answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
