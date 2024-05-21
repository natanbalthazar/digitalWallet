import React from "react";

import { Container, TitleContainer, Controllers } from "./styles";

// Para dizer o nome das páginas
interface IContentHeaderProps {
  title: string;
  $lineColor: string;
  children: React.ReactNode; // Indica que recebe componentes
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
  title,
  $lineColor,
  children,
}) => {
  return (
    <Container>
      <TitleContainer $lineColor={$lineColor}>
        <h1>{title}</h1>
      </TitleContainer>
      <Controllers>{children}</Controllers>
    </Container>
  );
};

export default ContentHeader;
