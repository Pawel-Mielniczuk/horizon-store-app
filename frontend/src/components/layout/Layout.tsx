import { ReactNode } from "react";
import { Header } from "../header/Header.tsx";
import { GlobalStyle } from "./GlobalStyles.tsx";

interface ILayoutProps {
  children?: ReactNode;
}

const InnerStyles = styled.main`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
