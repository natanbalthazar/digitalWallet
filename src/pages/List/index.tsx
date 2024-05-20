import React from "react";
import { Container } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

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
    </Container>
  );
};

export default List;
