import { useTranslation } from "react-i18next";

function setTextAlign(): "left" | "right" | "center" {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  if (currentLanguage == "ar") {
    return "right";
  }
  return "left";
}
export default setTextAlign;
