import NextI18Next from "next-i18next";
import path from "path";

const NextI18Instance = new NextI18Next({
  defaultLanguage: "cs",
  otherLanguages: ["cs"],
  localePath: path.resolve("./public/locales"),
});

export const {
  appWithTranslation,
  useTranslation,
  withTranslation,
  i18n,
  Link,
} = NextI18Instance;

export interface WithNamespaces {
  namespacesRequired: string[];
  [key: string]: any;
}

export default NextI18Instance;
