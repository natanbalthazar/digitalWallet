import React from "react";

import { Container } from "./styles";
import ContentHeader from "../../components/ContentHeader/index";
import SelectInput from "../../components/SelectInput";

const Dashboard: React.FC = () => {
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
      <ContentHeader title="Dashboard" lineColor="#fff">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
