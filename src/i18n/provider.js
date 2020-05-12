import React, { Fragment } from "react";
import { IntlProvider } from "react-intl";

import { LOCALES } from "./locales";
import { Fragment } from "react";

const Provider = ({ children, locale }) => {
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>;
};
