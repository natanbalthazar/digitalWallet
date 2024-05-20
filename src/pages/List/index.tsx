import React from "react";
import { Container, Content } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

const List: React.FC = () => {
  const options = [
    {
      value: "Natan",
      label: "Natan",
    },
    {
      value: "Teste",
      label: "Teste",
    },
  ];

  return (
    <Container>
      <ContentHeader title="List" lineColor="#fff">
        <SelectInput options={options} />
      </ContentHeader>
      <Content>
        <HistoryFinanceCard
          cardColor="blue"
          tagColor="red"
          title="Conta de Luz"
          subtitle="20/05/2024"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="blue"
          tagColor="red"
          title="Conta de Luz"
          subtitle="20/05/2024"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="blue"
          tagColor="red"
          title="Conta de Luz"
          subtitle="20/05/2024"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="blue"
          tagColor="red"
          title="Conta de Luz"
          subtitle="20/05/2024"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="blue"
          tagColor="red"
          title="Conta de Luz"
          subtitle="20/05/2024"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="blue"
          tagColor="red"
          title="Conta de Luz"
          subtitle="20/05/2024"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="blue"
          tagColor="red"
          title="Conta de Luz"
          subtitle="20/05/2024"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="blue"
          tagColor="red"
          title="Conta de Luz"
          subtitle="20/05/2024"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="blue"
          tagColor="red"
          title="Conta de Luz"
          subtitle="20/05/2024"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="blue"
          tagColor="red"
          title="Conta de Luz"
          subtitle="20/05/2024"
          amount="R$ 130,00"
        />
      </Content>
    </Container>
  );
};

export default List;
