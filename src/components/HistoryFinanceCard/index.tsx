import React from "react";

import { Container, Tag } from "./styles";

// Passa as propriedades que o componente irá exigir para ser exibido na tela
// É onde declaramos
interface IHistoryFinanceCardProps {
  cardColor: string;
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
}

// É onde trazemos as propriedades para serem usadas dentro do Component
const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
  cardColor,
  tagColor,
  title,
  subtitle,
  amount,
}) => {
  return (
    <Container color={cardColor}>
      <Tag color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
      <h3>{amount}</h3>
    </Container>
  );
};

export default HistoryFinanceCard;
