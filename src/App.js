import { MantineProvider } from "@mantine/core";
import React from "react";

import AppShellComp from "./AppShellComp";

const App = () => {
  return (
    <div className="App">
      <MantineProvider
        theme={{
          fontFamily: "Open Sans",
          colorScheme: "light",
          fontSizes: { md: 12 },
          colors: {},
        }}
        styles={{
          Button: (theme) => ({
            root: {
              backgroundColor: theme.colors.blue[1],
            },
          }),
        }}
      >
        <AppShellComp />
      </MantineProvider>
    </div>
  );
};

export default App;
