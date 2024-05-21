import React, { useMemo } from "react";
import { Container, Content, Filters } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import { useParams } from "react-router-dom";

const List: React.FC = () => {
  // Desestruturando: fazemos isso para pegar o nome do parâmetro direto.
  const { type } = useParams();

  const info = useMemo(() => {
    return type === "entry-balance"
      ? { title: "Entradas", $lineColor: "#F7931B" }
      : { title: "Saídas", $lineColor: "#E44C4E" };
  }, [type]); // Ao colocar ele aqui, criamos uma dependência, verificando o type novamente. Caso não seja colocado, ele executará apenas 1 vez.

  const months = [
    {
      value: 1,
      label: "Janeiro",
    },
    {
      value: 2,
      label: "Fevereiro",
    },
    {
      value: 3,
      label: "Março",
    },
    {
      value: 4,
      label: "Abril",
    },
    {
      value: 5,
      label: "Maio",
    },
    {
      value: 6,
      label: "Junho",
    },
    {
      value: 7,
      label: "Julho",
    },
    {
      value: 8,
      label: "Agosto",
    },
    {
      value: 9,
      label: "Setembro",
    },
    {
      value: 10,
      label: "Outubro",
    },
    {
      value: 11,
      label: "Novembro",
    },
    {
      value: 12,
      label: "Dezembro",
    },
  ];

  const years = [
    {
      value: 2024,
      label: 2024,
    },
    {
      value: 2023,
      label: 2023,
    },
    {
      value: 2022,
      label: 2022,
    },
  ];

  return (
    <Container>
      <ContentHeader title={info.title} $lineColor={info.$lineColor}>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </Filters>

      <Content>
        <HistoryFinanceCard
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
