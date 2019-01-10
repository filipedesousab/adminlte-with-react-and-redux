import React from 'react';

import { Content } from '../common/ui-layout';

const Home = () => (
  <Content title="Home" subtitle="Subtitulo" breadcrumb={[{ label: 'Home', href: '#' }]}>
    Página inicial
  </Content>
);

export default Home;
