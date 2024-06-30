import { ConfigProvider } from "antd";

import React, { FunctionComponent, ReactNode } from "react";
import { defaultToken } from "./defaultToken";
import { AliasToken } from "antd/es/theme/internal";
import { defaultComponents } from "./defaultComponents";
import { OverrideToken } from "antd/es/theme/interface";

type Props = {
  token?: Partial<AliasToken>;
  components?: OverrideToken;
  children: ReactNode;
};

export const AntdConfigProvider: FunctionComponent<Props> = ({
  children,
  token,
  components,
}: Props) => {
  return (
    <ConfigProvider
      theme={{
        token: token ? token : defaultToken,
        components: components ? components : defaultComponents,
      }}
    >
      {children}
    </ConfigProvider>
  );
};
