import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import English from '../../../lang/en.json';
import Spanish from "../../../lang/es.json";
import Russian from "../../../lang/ru.json";
import Ukrainian from "../../../lang/ua.json";

export const Context = React.createContext({});

let local = navigator.language;
if (local.indexOf('-') !== -1) {
  const parts = local.split('-');
  local = parts.shift();
}

const getLang = (langName) => {
  switch (langName) {
    case 'es':
      return Spanish;
    case 'ru':
      return Russian;
    case 'ua':
      return Ukrainian;
    default: return English;
  }
}

const lang = getLang(local);

const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  function selectLanguage(newLocale) {
    setLocale(newLocale);
    setMessages(getLang(newLocale));
  }

  return (
    <Context.Provider value = {{locale, selectLanguage}}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
}

export default Wrapper;
