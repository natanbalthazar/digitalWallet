import React from "react";

import { Container } from "./styles";

// Para criar valores dinâmicos para o Select:
interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
}

const SelectInput: React.FC<ISelectInputProps> = ({ options = [] }) => {
  return (
    <Container>
      <select name="" id="">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default SelectInput;
