import { AppShell, Navbar, Stack, Text, useMantineTheme } from "@mantine/core";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import UserMiniComp from "./Utilities/UserMiniComp";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Paintings from "./Paintings";

function AppShellComp() {
  const theme = useMantineTheme();
  return (
    <Router>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Navbar.Section>
              <Text>E-Gallery</Text>
            </Navbar.Section>
            <Navbar.Section grow mt="lg">
              <Stack>
                <Text component={Link} variant="link" to="/">
                  Home
                </Text>
                <Text component={Link} variant="link" to="/signin">
                  Se Connecter
                </Text>
                <Text component={Link} variant="link" to="/signup">
                  Creer un Compte
                </Text>
              </Stack>
            </Navbar.Section>
            <Navbar.Section>
              <UserMiniComp />
            </Navbar.Section>
          </Navbar>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/paintings" element={<Paintings />} />
        </Routes>
      </AppShell>
    </Router>
  );
}

export default AppShellComp;
