import { Paper, Typography } from "@mui/material";

const Item = (props: any) => {
  return (
    <Paper
      sx={{
        backgroundImage: `url(${props.item.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "end",
        color: "white",
        height: 300,
      }}
    >
      <Typography
        mb={1}
        sx={{ opacity: 0.5 }}
        borderRadius={2}
        width={300}
        variant="h4"
        bgcolor={"black"}
      >
        {props.item.name}
      </Typography>
    </Paper>
  );
};

export default Item;
