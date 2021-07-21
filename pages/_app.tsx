import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, Button, Grommet, Header } from "grommet";
import { Moon, Sun } from "grommet-icons";
import NGTTheme from "../styles/theme";
import { useState } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [lightTheme, setLightTheme] = useState(true)

  return (
    <Grommet theme={NGTTheme} themeMode={lightTheme ? "light" : "dark"}>
      <Box height="100vh" width="100vw">
        <Header background="#353B41">
          <img
            style={{ maxWidth: "150px", padding: "10px" }}
            src="https://www.ngt.academy/wp-content/uploads/2021/06/ngtacademy-white.png"
          />
          <Button
            icon={lightTheme ? <Sun /> : <Moon />}
            onClick={() => {
              setLightTheme(!lightTheme)
            }}
          />
        </Header>
        <Component {...pageProps} />
      </Box>
    </Grommet>
  );
};

export default MyApp;
