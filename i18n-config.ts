export const i18n = {
    defaultLocale: "en",
    locales: [
      {
        locale: "en",
        name: "English",
        direction: "ltr",
      },
      {
        locale: "ro",
        name: "Română",
        direction: "ltr",
      },
    ],
  } as const;
  
  type ILocale = (typeof i18n)["locales"][number]["locale"];
  
  export type Locale = ILocale;