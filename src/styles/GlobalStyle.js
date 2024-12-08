import { css, Global } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={(theme) => css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: "Pretendard", sans-serif;
        background-color: ${theme.colors.bgBase};
        color: ${theme.colors.textPrimary};
        overflow-x: hidden;
      }
    `}
  />
);

export default GlobalStyle;
