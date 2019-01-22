import React from 'react';

import { Content, Box } from '../common/ui-layout';
import { Label } from '../common/ui-elements';

/** @type {function} Página inicial da aplicação */
const HomeComponent = () => (
  <Content
    title={<Label icon="fa fa-home">Home</Label>}
    subtitle={<Label>Subititulo</Label>}
    breadcrumb={[{ label: 'Home', href: '#' }]}
  >
    <Box title={<Label icon="fa fa-cog">Teste</Label>} color="danger">
      Página Home - Atualmente usando para teste
    </Box>
  </Content>
);

export default HomeComponent;
