import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { store } from "../../redux";

const ProviderConfig = ({ children }) => {
  return (
    <>
      <BrowserRouter>
        <ConfigProvider>
          <I18nextProvider i18n={i18n} defaultNS={"translation"}>
            <Provider store={store}>{children}</Provider>
          </I18nextProvider>
        </ConfigProvider>
      </BrowserRouter>
    </>
  );
};

ProviderConfig.propTypes = {
  children: PropTypes.object,
};

export default ProviderConfig;
