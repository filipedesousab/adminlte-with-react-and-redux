import React from 'react';

import { Content, Box, Grid } from '../common/ui-layout';
import { Label, Button, Tabs, Tab, Popover } from '../common/ui-elements';
import Abas from './containers/Abas';
import Form from './containers/Form';

/** @type {function} Página inicial da aplicação */
class TestsComponent extends React.Component {
  render() {
    return (
      <Content
        title={<Label icon="fa fa-edit">Testes</Label>}
        subtitle={<Label>Subititulo</Label>}
        breadcrumb={[{ label: 'Testes', href: '#' }]}
      >
        <Box title={<Label icon="fa fa-cog">Teste</Label>} color="danger">
          Página Testes - Atualmente usando para teste
          <br />
          <br />
          <Tabs defaultActiveKey="abas" id="tabs">
            <Tab title="Tabs" eventKey="abas">
              <Abas />
            </Tab>
            <Tab title="Form" eventKey="form">
              <Form />
            </Tab>
          </Tabs>
          <br /><br /><br /><br />
          <Grid.Row>
            <Grid.Col md={3}>
            </Grid.Col>
            <Grid.Col md={2}>
              <Popover description="Exemplo de Popover 1">
                <Button color="default"><Label>Botão 1</Label></Button>
              </Popover>
            </Grid.Col>
            <Grid.Col md={2}>
              <Popover description="Exemplo de Popover 2" title="Título do Popover" placement="left">
                <Button><Label>Botão 2</Label></Button>
              </Popover>
            </Grid.Col>
          </Grid.Row>
        </Box>
      </Content>
    );
  }
}

export default TestsComponent;
