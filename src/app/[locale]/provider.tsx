'use client'
import StyledComponentsRegistry from "@/services/base/styledComponentsRegistry";
import { store } from "@/stores/store";
import GlobalStyle from "@/style/global";
import { themes } from "@/style/themes";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { AntdRegistry } from '@ant-design/nextjs-registry'
import ProviderI18n from "@/services/i18n/ProviderI18n";
import { App, ConfigProvider } from "antd";

type Props = {
    children: React.ReactNode;
};
const ProviderComponents = ({ children }: Props) => {
    return (
        <>
            <ProviderI18n>
                <StyledComponentsRegistry>
                    <ThemeProvider theme={themes.default}>
                        <GlobalStyle />
                        <AntdRegistry>
                            <ConfigProvider
                                theme={{
                                    components: {
                                        Button: {
                                            colorPrimary:
                                                themes.default.colors.primary,
                                            algorithm: true,
                                        },
                                        Input: {
                                            paddingBlock: 8,
                                        },
                                        Typography: {
                                            titleMarginBottom: 0,
                                            titleMarginTop: 0,
                                        },
                                        Table: {
                                            headerBg: "#fff",
                                            headerColor: "#000",
                                            headerBorderRadius: 8,
                                            footerBg: "#fff",
                                        },
                                        Select: {
                                            controlHeight: 40,
                                            fontSizeLG: 14,
                                        },
                                    },
                                    token: {
                                        colorPrimary: themes.default.colors.primary,
                                    },
                                }}
                            >
                                <App>
                                    <Provider store={store}>
                                        {/* <SessionProvider> */}
                                        {/* <UserProvider> */}
                                        {children}
                                        {/* </UserProvider> */}
                                        {/* </SessionProvider> */}
                                    </Provider>
                                </App>
                            </ConfigProvider>
                        </AntdRegistry>
                    </ThemeProvider>
                </StyledComponentsRegistry>
            </ProviderI18n>
        </>
    );
};

export default ProviderComponents;