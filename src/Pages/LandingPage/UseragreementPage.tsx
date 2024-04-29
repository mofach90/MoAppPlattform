import { Box, Grid, Stack, Typography } from "@mui/material";
import BackToHomeButton from "../../components/BackToHomeButton";

function UseragreementPage() {
  return (
    <Box
      minHeight={"100vh"}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      sx={{ overflow: "hidden" }}
    >
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        maxWidth={1200}
        sx={{ width: "100%" }}
        minWidth={700}
      >
        <Grid item mt={3} ml={2}>
          <BackToHomeButton />
        </Grid>
        <Grid item padding={4}>
          <img
            style={{
              width: "100%",
              height: "60vh",
              borderRadius: 10,
              border: "1px solid",
              opacity: 0.8,
            }}
            src="src/assets/useragreement.jpg"
          />
        </Grid>

        <Grid item padding={4}>
          <Stack padding={3} borderRadius={2} textAlign={"center"}>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"white"}
              variant="h4"
            >
              User Agreement for Mo App Platform
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
              Introduction
            </Typography>
            <Typography color={"black"} variant="body1">
              Welcome to Mo App Platform. By accessing or using our platform,
              you agree to be bound by the terms and conditions of this User
              Agreement. Please read this agreement carefully before accessing
              or using our services.{" "}
            </Typography>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              1. Acceptance of Terms
            </Typography>
            <Typography color={"black"} variant="body1">
              The services that Mo App Platform provides to you are subject to
              the following User Agreement ("Agreement"). We reserve the right
              to update the Agreement at any time without notice to you. The
              most current version of the Agreement can be reviewed by clicking
              on the "User Agreement" hypertext link located at the bottom of
              our web pages.
            </Typography>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              2. Description of Services
            </Typography>
            <Typography mt={1} color={"black"} variant="body1">
              Mo App Platform provides users with access to a rich collection of
              resources, including various communication tools, forums, shopping
              services, search services, personalized content, and branded
              programming through its network of properties which may be
              accessed through any various medium or device now known or
              hereafter developed.
            </Typography>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              3. Privacy and Protection of Personal Information
            </Typography>
            <Typography color={"black"} variant="body1">
              See the Privacy Policy disclosures relating to the collection and
              use of your information.
            </Typography>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              4. Member Account, Password, and Security
            </Typography>
            <Typography mt={1} color={"black"} variant="body1">
              If any of the Services requires you to open an account, you must
              complete the registration process by providing us with current,
              complete, and accurate information as prompted by the applicable
              registration form. You also will choose a password and a user
              name. You are entirely responsible for maintaining the
              confidentiality of your password and account. Furthermore, you are
              entirely responsible for any and all activities that occur under
              your account. You agree to notify Mo App Platform immediately of
              any unauthorized use of your account or any other breach of
              security. Mo App Platform will not be liable for any loss that you
              may incur as a result of someone else using your password or
              account, either with or without your knowledge. However, you could
              be held liable for losses incurred by Mo App Platform or another
              party due to someone else using your account or password.
            </Typography>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              5. No Unlawful or Prohibited Use
            </Typography>
            <Typography color={"black"} variant="body1">
              As a condition of your use of the Services, you will not use the
              Services for any purpose that is unlawful or prohibited by these
              terms, conditions, and notices. You may not use the Services in
              any manner that could damage, disable, overburden, or impair any
              Mo App Platform server, or the network(s) connected to any Mo App
              Platform server, or interfere with any other party's use and
              enjoyment of any Services.{" "}
            </Typography>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              6. Use of Services
            </Typography>
            <Typography color={"black"} variant="body1">
              The Mo App Platform may contain email services, bulletin board
              services, chat areas, news groups, forums, communities, personal
              web pages, calendars, photo albums, file cabinets, and/or other
              message or communication facilities designed to enable you to
              communicate with others (collectively, "Communication Services").
              You agree to use the Communication Services only to post, send and
              receive messages and material that are proper and, when
              applicable, related to the particular Communication Service.
            </Typography>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              7. Termination/Access Restriction
            </Typography>
            <Typography color={"black"} variant="body1">
              Mo App Platform reserves the right, in its sole discretion, to
              terminate your access to any or all Mo App Platform Services and
              the related services or any portion thereof at any time, without
              notice.{" "}
            </Typography>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              8. General
            </Typography>
            <Typography color={"black"} variant="body1">
              This agreement is governed by the laws of the State where Mo App
              Platform is headquartered. You hereby consent to the exclusive
              jurisdiction and venue of courts in that State in all disputes
              arising out of or relating to the use of Mo App Platform Services.
            </Typography>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              9. Copyright and Trademark Notices
            </Typography>
            <Typography color={"black"} variant="body1">
              All contents of Mo App Platform are: Copyright [Insert Year] by Mo
              App Platform. All rights reserved.{" "}
            </Typography>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              10. Trademarks
            </Typography>
            <Typography color={"black"} variant="body1">
              The names of actual companies and products mentioned herein may be
              the trademarks of their respective owners.
            </Typography>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              11. Language
            </Typography>
            <Typography color={"black"} variant="body1">
              This agreement was originally written in English (US). To the
              extent any translated version of this agreement conflicts with the
              English version, the English version controls.
            </Typography>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              Contact Us
            </Typography>
            <Typography color={"black"} variant="body1">
              If you have any questions or concerns about this Agreement, please
              contact us at{" "}
              <span
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  color: "blue",
                }}
              >
                {" "}
                ayari.mohamed@web.de
              </span>
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

export default UseragreementPage;
