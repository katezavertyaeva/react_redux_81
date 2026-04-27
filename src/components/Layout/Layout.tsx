import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";

import NavigationLink from "../NavigationLink/NavigationLink";
import { navLinkData } from "./data";
import {
  Footer,
  GoBackButton,
  Header,
  LayoutComponent,
  Logo,
  LogoContainer,
  Main,
  NavContainer,
} from "./styles";
import type { LayoutProps, NavLinkObj } from "./types";

export const LayoutContext = createContext<string | undefined>(undefined);

function Layout({ children }: LayoutProps) {
  const [name, setName] = useState<string | undefined>("Kate Zavertyaeva");

  // useNavigate - это хук из библиотеки react-router-dom. При вызове он
  // возвращает функцию, которую мы сохраняем в переменную и при вызове этой функции
  // мы можем передать путь и произойдет редирект
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };

  const goBack = () => {
    navigate(-1);
  };

  const navLinks = navLinkData.map((navLink: NavLinkObj) => {
    return (
      <NavigationLink key={v4()} to={navLink.to} linkName={navLink.linkName} />
    );
  });

  return (
    <LayoutContext.Provider value={name}>
      <LayoutComponent>
        <Header>
          <LogoContainer>
            <Logo onClick={goToHomePage}>81</Logo>
            <GoBackButton onClick={goBack}>{"<--"}</GoBackButton>
          </LogoContainer>
          <NavContainer>{navLinks}</NavContainer>
        </Header>
        <Main>{children}</Main>
        <Footer>
          <Logo onClick={goToHomePage}>81</Logo>
        </Footer>
      </LayoutComponent>
    </LayoutContext.Provider>
  );
}

export default Layout;
