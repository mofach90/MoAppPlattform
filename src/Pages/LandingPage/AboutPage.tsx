import { Box, Grid, Stack, Typography } from "@mui/material";
import BackToHomeButton from "../../components/BackToHomeButton";

function AboutPage() {
  return (
    <Box
      minHeight={"100vh"}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
    >
      <Grid
        container
        maxWidth={1200}
        display={"flex"}
        flexDirection={"column"}

        // spacing={0.03}
      >
        <Grid item mt={3} ml={2}>
          <BackToHomeButton />
        </Grid>
        <Grid item padding={4}>
          <img
            style={{
              width: "100%",
              height: "30vh",
              borderRadius: 10,
              border: "1px solid",
            }}
            src="src/assets/AboutPage2.jpg"
          />
        </Grid>
        <Grid item padding={4}>
          <Stack bgcolor={"whitesmoke"} padding={3} borderRadius={2}>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              Our Mission
            </Typography>
            <Typography mt={1} color={"black"} variant="body1">
              Our mission is to empower individuals and teams to achieve more by
              providing them with comprehensive tools that cater to both their
              professional and personal needs. By centralizing various
              functionalities into one accessible platform, we aim to streamline
              your daily routines and save you time, which you can spend on what
              truly matters to you.
            </Typography>
          </Stack>
        </Grid>

        <Grid item padding={4}>
          <Stack bgcolor={"whitesmoke"} padding={3} borderRadius={2}>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              Our Vision{" "}
            </Typography>
            <Typography mt={1} color={"black"} variant="body1">
              We envision a world where technology helps everyone to reach their
              potential. Our commitment is to continuously evolve and adapt to
              the needs of our users, integrating cutting-edge technology and
              user feedback into our platform development. We strive to be at
              the forefront of the digital revolution, ensuring our users always
              have the best tools at their disposal.
            </Typography>
          </Stack>
        </Grid>
        <Grid item padding={4}>
          <Stack bgcolor={"whitesmoke"} padding={3} borderRadius={2}>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              Features and Benefits
            </Typography>
            <Typography mt={1} color={"black"} variant="body1">
              <span style={{ fontWeight: "bold" }}>
                - Versatile Suite of Apps:
              </span>{" "}
              From task management to entertainment, our apps cover a broad
              spectrum of functionalities, all integrated into a single
              platform.
              <Typography>
                <span style={{ fontWeight: "bold" }}>
                  - User-Centric Design:
                </span>{" "}
                We prioritize ease of use. Our platform's design is guided by a
                deep understanding of our users' needs, making navigation and
                operation as intuitive as possible.
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>- Regular Updates:</span>{" "}
                We're committed to innovation and improvement. Mo App Platform
                is regularly updated with new features and apps to keep up with
                changing technologies and
              </Typography>
            </Typography>
          </Stack>
        </Grid>
        <Grid item padding={4}>
          <Stack bgcolor={"whitesmoke"} padding={3} borderRadius={2}>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              Join Us on This Journey
            </Typography>
            <Typography mt={1} color={"black"} variant="body1">
              As Mo App Platform continues to grow and evolve, we invite you to
              join us on this journey. Your feedback and suggestions are
              invaluable as they help us shape the future of our platform.
              Together, let's redefine productivity and leisure, making every
              day more efficient and enjoyable.
            </Typography>
          </Stack>
        </Grid>
        <Grid item mb={3} ml={2}>
          <BackToHomeButton />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutPage;
