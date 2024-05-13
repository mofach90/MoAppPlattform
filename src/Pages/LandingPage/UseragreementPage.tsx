import { Box, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import BackToHomeButton from "../../components/BackToHomeButton";
import setTextAlign from "../../utilities/settextAlignement";

function UserAgreementPage() {
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
            }}
            src="/assets/useragreement.jpg"
            alt={t("userAgreementPage.title")}
          />
        </Grid>
        <Grid item padding={4}>
          <Stack padding={3} borderRadius={2} textAlign="center">
            <Typography sx={{ fontWeight: "Bold" }} color="white" variant="h4">
              {t("userAgreementPage.title")}
            </Typography>
          </Stack>
        </Grid>
        <Grid item padding={4}>
          <Stack bgcolor="whitesmoke" padding={3} borderRadius={2}>
            {Object.keys(t("userAgreementPage", { returnObjects: true }))
              .filter((key) => key.includes("Desc"))
              .map((key, index) => (
                <Box key={index}>
                  <Typography
                    sx={{ fontWeight: "Bold" }}
                    color="black"
                    variant="h6"
                    mt={1}
                  >
                    {t(`userAgreementPage.${key.replace("Desc", "")}`)}
                  </Typography>
                  <Typography color="black" variant="body1">
                    {t(`userAgreementPage.${key}`)}
                  </Typography>
                </Box>
              ))}
          </Stack>
        </Grid>

        <Grid item mb={3} ml={2}>
          <BackToHomeButton />
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserAgreementPage;
