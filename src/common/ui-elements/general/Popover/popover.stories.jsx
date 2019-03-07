import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'common/dependencies.js';
import { Button, Label } from 'common/ui-elements';
import Popover from './';

storiesOf('ui-elements/general/Popover [Popover, UIE029]', module)
  .add('description e children', () => (
    <Popover description="Descrição do Popover">
      <Button><Label>Botão</Label></Button>
    </Popover>
  ), {
    notes: `Texto a ser exibido no Popover. Deve ser string.
            O children é o elemento a receber o Popover.`,
  })

  .add('title', () => (
    <Popover description="Descrição do Popover" title="Um título">
      <Button><Label>Botão</Label></Button>
    </Popover>
  ), {
    notes: 'Texto a ser exibido no título do Popover. Deve ser string.',
  })

  .add('trigger', () => ['click', 'hover', 'focus'].map((trigger, index) => (
    <React.Fragment key={index.toString()}>
      <Popover
        description="Descrição do Popover"
        trigger={trigger}
      >
        <Button><Label>trigger {trigger}</Label></Button>
      </Popover>
      <br /><br />
    </React.Fragment>
  )), {
    notes: `Ação do usuário para acionar o Popover.
            Pode ser um array com mais de uma opção.
            As opções são click, hover e focus.`,
  })

  .add('placement', () => ['bottom', 'top', 'right', 'left'].map((placement, index) => (
    <React.Fragment key={index.toString()}>
      <Popover
        description={`Popover ${placement}`}
        placement={placement}
      >
        <Button><Label>placement {placement}</Label></Button>
      </Popover>
      <br /><br />
    </React.Fragment>
  )), {
    notes: `Posição de exibição do Popover.
            As opções são top, right, bottom e left.`,
  })

  .add('delay true', () => (
    <Popover delay description="Popover exibido em 600ms">
      <Button><Label>Espere 0.6s</Label></Button>
    </Popover>
  ), {
    notes: 'O delay aplica um atraso em milissegundos para exibir o Popover, quando true aplica 600ms.',
  })

  .add('delay 2000ms', () => (
    <Popover delay={2000} description="Popover exibido em 2000ms">
      <Button><Label>Espere 2s</Label></Button>
    </Popover>
  ), {
    notes: 'O delay aplica um atraso em milissegundos para exibir o Popover, quando true aplica 600ms.',
  })
