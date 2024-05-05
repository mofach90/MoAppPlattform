import { Box, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import BackToHomeButton from "../../components/BackToHomeButton";
import setTextAlign from "../../utilities/settextAlignement";

function LicencePage() {
  const { t } = useTranslation();
  const textAlign = setTextAlign();

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      sx={{ overflow: "hidden" }}
      textAlign={textAlign}
    >
      <Grid
        container
        display="flex"
        flexDirection="column"
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
          <Stack padding={3} borderRadius={2} textAlign="center">
            <Typography sx={{ fontWeight: "Bold" }} color="white" variant="h4">
              {t("licencePage.title")}
            </Typography>
          </Stack>
        </Grid>
        <Grid item padding={4}>
          <Stack bgcolor="whitesmoke" padding={3} borderRadius={2}>
            <Typography sx={{ fontWeight: "Bold" }} color="black" variant="h6">
              {t("licencePage.grantOfLicense")}
            </Typography>
            <Typography color="black" variant="body1">
              {t("licencePage.grantOfLicenseDesc")}
            </Typography>
            <Typography sx={{ fontWeight: "Bold" }} color="black" variant="h6">
              {t("licencePage.scopeOfLicense")}
            </Typography>
            <Typography color="black" variant="body1">
              {t("licencePage.scopeOfLicenseUse")}
            </Typography>
            <Typography color="black" variant="body1">
              {t("licencePage.scopeOfLicenseRestrictions")}
            </Typography>
            <Typography sx={{ fontWeight: "Bold" }} color="black" variant="h6">
              {t("licencePage.intellectualPropertyRights")}
            </Typography>
            <Typography color="black" variant="body1">
              {t("licencePage.intellectualPropertyRightsDesc")}
            </Typography>
            <Typography sx={{ fontWeight: "Bold" }} color="black" variant="h6">
              {t("licencePage.content")}
            </Typography>
            <Typography color="black" variant="body1">
              {t("licencePage.contentOwnership")}
            </Typography>
            <Typography color="black" variant="body1">
              {t("licencePage.contentPermissions")}
            </Typography>
            <Typography sx={{ fontWeight: "Bold" }} color="black" variant="h6">
              {t("licencePage.termAndTermination")}
            </Typography>
            <Typography color="black" variant="body1">
              {t("licencePage.termAndTerminationDesc")}
            </Typography>
            <Typography sx={{ fontWeight: "Bold" }} color="black" variant="h6">
              {t("licencePage.disclaimerOfWarranties")}
            </Typography>
            <Typography color="black" variant="body1">
              {t("licencePage.disclaimerOfWarrantiesDesc")}
            </Typography>
            <Typography sx={{ fontWeight: "Bold" }} color="black" variant="h6">
              {t("licencePage.limitationOfLiability")}
            </Typography>
            <Typography color="black" variant="body1">
              {t("licencePage.limitationOfLiabilityDesc")}
            </Typography>
            <Typography sx={{ fontWeight: "Bold" }} color="black" variant="h6">
              {t("licencePage.generalProvisions")}
            </Typography>
            <Typography color="black" variant="body1">
              {t("licencePage.generalProvisionsDesc")}
            </Typography>
            <Typography sx={{ fontWeight: "Bold" }} color="black" variant="h6">
              {t("licencePage.changesToThisAgreement")}
            </Typography>
            <Typography color="black" variant="body1">
              {t("licencePage.changesToThisAgreementDesc")}
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
