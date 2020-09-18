import React from "react";
import { Container, Preto, Branco } from "./styles";

import dev from "../../assets/image/dev.svg";
import empresa from "../../assets/image/empresa.svg";

const SelectUser: React.FC = () => {
  return (
    <Container>
      <div>
        <Preto>
          <div>
            <h1>Registre-se como Dev</h1>
            <h2>Pode ser localizado por empresas e expôr seus projetos. </h2>
            <h2>Além de oferecer suas propostas a empresas.</h2>
            <img src={dev} alt="dev" />
            <div>
              <button>Dev</button>
            </div>
            <div>
              <a>Voltar</a>
            </div>
          </div>
        </Preto>
      </div>
      <div>
        <Branco>
          <h1>Registre-se como Empresa</h1>
          <h2>
            Solicite um dev para criar seu projeto, oferecer suporte entre
            outros serviços. Apresente
          </h2>
          <h2>seu projeto e receba propostas de devs.</h2>

          <img src={empresa} alt="empresa" />
          <button>Empresa</button>
          <a href="/">Voltar</a>
        </Branco>
      </div>
    </Container>
  );
};

export default SelectUser;
