import { Box, Grid, Stack, Typography } from "@mui/material";
import BackToHomeButton from "../../components/BackToHomeButton";

function LicencePage() {
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
            src="src/assets/Licencefinal.jpg"
            alt="Licence Image"
          />
        </Grid>

        <Grid item padding={4}>
          <Stack padding={3} borderRadius={2} textAlign={"center"}>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"white"}
              variant="h4"
            >
              License Agreement for Mo App Platform{" "}
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
              1. Grant of License
            </Typography>
            <Typography color={"black"} variant="body1">
              This Agreement grants you a non-exclusive, non-transferable
              license to access and use the Mo App Platform and its services
              according to the specific terms set forth in this Agreement and
              applicable to the service plans and options you have selected.
            </Typography>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              2. Scope of License
            </Typography>
            <Typography mt={1} color={"black"} variant="body1">
              <span style={{ fontWeight: "bold" }}>a. Use:</span> You are
              granted the right to access and use the Mo App Platform for
              personal or business purposes as intended through the provided
              functionality of the platform.
              <Typography>
                <span style={{ fontWeight: "bold" }}>b. Restrictions:</span> You
                may not license, sell, rent, lease, transfer, assign,
                distribute, host, or otherwise commercially exploit the
                platform. You may not modify, make derivative works of,
                disassemble, reverse compile, or reverse engineer any part of
                the platform, nor attempt to do so.
              </Typography>
            </Typography>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              3. Intellectual Property Rights
            </Typography>
            <Typography color={"black"} variant="body1">
              The Company and its licensors own all rights, title, and interest
              in and to the Mo App Platform, including all related intellectual
              property rights. The licenses granted under this agreement do not
              convey any rights in the Mo App Platform, express or implied,
              except as expressly stated in this Agreement.
            </Typography>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              4. Content
            </Typography>
            <Typography mt={1} color={"black"} variant="body1">
              <span style={{ fontWeight: "bold" }}>a. Ownership: </span> You
              retain all rights and ownership of your content. We do not claim
              any ownership rights to the information or content you upload to
              the Mo App Platform. functionality of the platform.
              <Typography>
                <span style={{ fontWeight: "bold" }}>b. Permissions: </span> By
                uploading content to the platform, you agree that you have all
                the necessary licenses and permissions to use and share such
                content.
              </Typography>
            </Typography>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              5. Term and Termination
            </Typography>
            <Typography color={"black"} variant="body1">
              This Agreement will remain in effect until terminated by you or
              the Company. You may terminate this Agreement by deleting your
              account and ceasing all use of the platform. The Company may
              terminate this Agreement at any time without notice, particularly
              if you fail to comply with any terms outlined herein.
            </Typography>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              6. Disclaimer of Warranties{" "}
            </Typography>
            <Typography color={"black"} variant="body1">
              The Mo App Platform is provided "as is," with all faults and
              without warranty of any kind. The Company hereby disclaims all
              warranties, express or implied, including, without limitation,
              implied warranties of merchantability, fitness for a particular
              purpose, and non-infringement.
            </Typography>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              7. Limitation of Liability{" "}
            </Typography>
            <Typography color={"black"} variant="body1">
              In no event will the Company be liable for any indirect, special,
              incidental, punitive, exemplary, or consequential damages,
              including, but not limited to, loss of data, service
              interruptions, computer damage or system failures or the cost of
              substitute services arising out of or in connection with this
              Agreement or the use or inability to use the Mo App Platform,
              whether based on warranty, contract, tort (including negligence),
              product liability, or any other legal theory, and whether or not
              the Company has been informed of the possibility of such damage.
            </Typography>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              8. General Provisions{" "}
            </Typography>
            <Typography color={"black"} variant="body1">
              This Agreement constitutes the entire agreement between you and
              the Company regarding your use of the Mo App Platform and
              supersedes and replaces any prior agreements between you and the
              Company regarding the subject matter hereof.
            </Typography>
            <Typography
              sx={{ fontWeight: "Bold" }}
              color={"black"}
              variant="h6"
            >
              9. Changes to this Agreement
            </Typography>
            <Typography color={"black"} variant="body1">
              The Company reserves the right to modify or replace this Agreement
              at any time, and will do so by posting the updated terms on the
              site. Your continued use of the Mo App Platform after any such
              changes constitutes your acceptance of the new Terms.
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

export default LicencePage;
