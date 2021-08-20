import React from 'react';
import { SEO } from '../components/SEO';
import styled from 'styled-components';

import Header from '../components/Header';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 16px;
  align-content: center;
  justify-content: center;
  padding: 0 16px 16px;

  .title {
    font-size: 18px;
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
    margin-top: 18px;
  }
`;

const ContactPage = () => {
  return (
    <>
      <SEO title="Contacto" keywords={['sol', 'ubeda', 'contact']} />
      <Header>Contacto</Header>
      <StyledGrid>
        <div>
          <span className="title">Estudio (Academia ATC)</span>
          <a href="https://goo.gl/maps/cS2BXf6Pmno" target="_blank" rel="noopener noreferrer">
            C/ Altamira, 54.  Bajo, dx. 04005. Almería. España.
          </a>

          <span className="title">Correo electrónico:</span>
          <a href="mailto:solubeda@gmail.com">solubeda@gmail.com</a>

          <span className="title">Teléfono</span>
          <a href="tel:670653878">670 653 878</a>
        </div>

        <div>
          <span className="title">Grupo Yo-Yo</span>
          Comisariado por Maribel Úbeda (<a href="mailto:maribel.ubeda@gmail.com">maribel.ubeda@gmail.com</a>)

          <span className="title">Gestora de arte</span>
          Maribel Úbeda (<a href="mailto:maribel.ubeda@gmail.com">maribel.ubeda@gmail.com</a>)

          <span className="title">Desarrollo Web</span>
          Javier López Úbeda (<a href="mailto:jlopezcur@gmail.com">jlopezcur@gmail.com</a>)
        </div>
      </StyledGrid>
    </>
  );
};

export default ContactPage;
