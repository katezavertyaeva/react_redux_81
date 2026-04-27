import styled from "@emotion/styled";

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 30px;
  background: rgb(142, 196, 223);
`;

export const LogoContainer = styled.div`
  display: flex;
  gap: 26px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid rgb(6, 29, 40);
  background: rgb(142, 223, 156);
  font-size: 30px;
  font-weight: bold;
  color: rgb(6, 29, 40);
  cursor: pointer;
`;

export const GoBackButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  color: rgb(6, 29, 40);
  cursor: pointer;
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Main = styled.div`
  display: flex;
  flex: 1;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background: rgb(142, 196, 223);
`;
