import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import { Tab, Tabs } from './';

storiesOf('ui-elements/general/Tabs [Tabs, UIE032] e [Tab, UIE031]', module)
  .add('children em Tabs; title e children em Tab', () => (
    <Tabs>
      <Tab title="Uma Tab">
        <div style={{ width: '300px' }}>Corpo da Tab</div>
      </Tab>
    </Tabs>
  ), {
    notes: `O Tabs deve receber todas as Tab em seu children.
            A Tab obrigatoriamente tem que estar dentro de Tabs.
            O "title" da Tab recebe o título da Tab.
            O "children" da Tab recebe o conteúdo da Tab, que pode ser qualquer coisa que renderize.`,
  })

  .add('defaultActiveKey em Tabs; eventKey em Tab', () => (
    <Tabs defaultActiveKey="tab2">
      <Tab eventKey="tab1" title="Tab 1">
        <div>Corpo da Tab 1</div>
      </Tab>
      <Tab eventKey="tab2" title="Tab 2">
        <div>Corpo da Tab 2</div>
      </Tab>
    </Tabs>
  ), {
    notes: 'O "defaultActiveKey" recebe o "eventKey" da primeira Tab a ser exibida em Tabs não controladas.',
  })

  .add('activeKey em Tabs; eventKey em Tab', () => (
    <Tabs activeKey="tab2">
      <Tab eventKey="tab1" title="Tab 1">
        <div>Corpo da Tab 1</div>
      </Tab>
      <Tab eventKey="tab2" title="Tab 2">
        <div>Corpo da Tab 2</div>
      </Tab>
    </Tabs>
  ), {
    notes: 'O "activeKey" recebe o "eventKey" da Tab a ser exibida em Tabs controladas.',
  })

  .add('onSelect em Tabs', () => (
    <Tabs onSelect={key => console.log(key)}>
      <Tab eventKey="tab1" title="Tab 1">
        <div>Corpo da Tab 1</div>
      </Tab>
      <Tab eventKey="tab2" title="Tab 2">
        <div>Corpo da Tab 2</div>
      </Tab>
    </Tabs>
  ), {
    notes: `Função a ser executada quando houver ação de click nas Tab.
            Essa função retorna o "eventKey" da Tab selecionada(que recebeu o click).`,
  })

  .add('onClose em Tab', () => (
    <Tabs>
      <Tab
        eventKey="tab1"
        title="Tab 1"
        onClose={action('Fechar Tab 1')}
      >
        <div>Corpo da Tab 1</div>
      </Tab>
      <Tab
        eventKey="tab2"
        title="Tab 2"
        onClose={action('Fechar Tab 2')}
      >
        <div>Corpo da Tab 2</div>
      </Tab>
    </Tabs>
  ), {
    notes: 'Função a ser executada quando houver ação de click no botão de fechar.',
  })

  .add('onFix em Tab', () => (
    <Tabs>
      <Tab
        eventKey="tab1"
        title="Tab 1"
        onFix={action('Fixar Tab 1')}
      >
        <div>Corpo da Tab 1</div>
      </Tab>
      <Tab
        eventKey="tab2"
        title="Tab 2"
        onFix={action('Fixar Tab 2')}
      >
        <div>Corpo da Tab 2</div>
      </Tab>
    </Tabs>
  ), {
    notes: 'Função a ser executada quando houver ação de click no botão de fixar e desfixar.',
  })

  .add('fixed em Tab', () => (
    <Tabs>
      <Tab
        eventKey="tab1"
        title="Tab 1"
        onFix={action('Desfixar Tab 1')}
        fixed
      >
        <div>Corpo da Tab 1</div>
      </Tab>
      <Tab
        eventKey="tab2"
        title="Tab 2"
        onFix={action('Desfixar Tab 2')}
        fixed
      >
        <div>Corpo da Tab 2</div>
      </Tab>
    </Tabs>
  ), {
    notes: `O "fixed" só funciona quando tem a função "onFix" para desfixar.
            Quando "fixed" o ícone do botão de fixar fica com cadeado fechado laranja.
            Quando não "fixed" o ícone do botão de fixar fica com cadeado aberto verde.`,
  });
