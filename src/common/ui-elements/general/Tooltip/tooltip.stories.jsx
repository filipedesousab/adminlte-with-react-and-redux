import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'common/dependencies.js';
import { Button, Label } from 'common/ui-elements';
import Tooltip from './';

storiesOf('ui-elements/general/Tooltip [Tooltip, UIE030]', module)
  .add('description e children', () => (
    <Tooltip description="Descrição do Tooltip">
      <Button><Label>Botão</Label></Button>
    </Tooltip>
  ), {
    notes: `Texto a ser exibido no Tooltip. Deve ser string.
            O children é o elemento a receber o Tooltip.`,
  })

  .add('title', () => (
    <Tooltip description="Descrição do Tooltip" title="Um título">
      <Button><Label>Botão</Label></Button>
    </Tooltip>
  ), {
    notes: 'Texto a ser exibido no título do Tooltip. Deve ser string.',
  })

  .add('delay true', () => (
    <Tooltip description="Tooltip exibido em 1500ms">
      <Button><Label>Espere 1.5s</Label></Button>
    </Tooltip>
  ), {
    notes: 'O delay aplica um atraso em milissegundos para exibir o Tooltip, quando true aplica 1500ms.',
  })

  .add('delay 2000ms', () => (
    <Tooltip delay={2000} description="Tooltip exibido em 2000ms">
      <Button><Label>Espere 2s</Label></Button>
    </Tooltip>
  ), {
    notes: 'O delay aplica um atraso em milissegundos para exibir o Tooltip, quando true aplica 600ms.',
  });
