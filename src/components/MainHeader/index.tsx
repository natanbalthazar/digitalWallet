import React, { useMemo } from "react";
import emojis from "../../utils/emojis";

import { Container, Profile, Welcome, Username } from "./styles";

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <h1>Togle</h1>
      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <Username>Natan Balthazar</Username>
      </Profile>
    </Container>
  );
};

export default MainHeader;
