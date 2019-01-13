import React from 'react';

import { Content, Box } from '../common/ui-layout';

/** @type {function} Página inicial da aplicação */
const HomeComponent = () => (
  <Content title="Home" subtitle="Subtitulo" breadcrumb={[{ label: 'Home', href: '#' }]}>
    <Box title="Teste" color="danger">
    Página inicial
    </Box>
  </Content>
);

export default HomeComponent;
