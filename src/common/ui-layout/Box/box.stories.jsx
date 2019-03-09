import React from 'react';
import { storiesOf } from '@storybook/react';

import 'common/dependencies.js';
import { Button, Label } from 'common/ui-elements';
import Box from './';

const colors = ['primary', 'info', 'success', 'warning', 'danger', 'muted'];

const stories = storiesOf('ui-layout/Box [Box, UIL006]', module)
  .add('title', () => (
    <div style={{ width: '250px' }}>
      <Box title={<Label icon="fa fa-smile-o">Título do box</Label>} />
    </div>
  ), {
    notes: 'O "title" deve ser um Elemento React, o ideal é que seja um [Label, UIE002].',
  })

  .add('children', () => (
    <div style={{ width: '250px' }}>
      <Box title={<Label>Título do box</Label>}>
        Corpo do Box
      </Box>
    </div>
  ), {
    notes: 'É possível adicionar qualquer coisa que renderize no "children".',
  })

  .add('footer', () => (
    <div style={{ width: '250px' }}>
      <Box
        title={<Label>Título do box</Label>}
        footer={<Button>Footer Button</Button>}
      >
        Corpo do Box
      </Box>
    </div>
  ), {
    notes: 'É possível adicionar qualquer coisa que renderize no "footer".',
  })

  .add('color null', () => (
    <div style={{ width: '250px' }}>
      <Box
        title={<Label>Box color null</Label>}
        footer={<Button>Footer Button</Button>}
        color={null}
      >
        Corpo do Box
      </Box>
    </div>
  ), {
    notes: `A cor do Box é aplicada numa borta superior.
            Quando passado null no "color" o Box aplica a cor primary como default.`,
  });

colors.every((color, index) => stories.add(`color ${color}`, () => (
  <div style={{ width: '250px' }} key={index.toString()}>
    <Box
      title={<Label>Box color {color}</Label>}
      footer={<Button>Footer Button</Button>}
      color={color}
    >
      Corpo do Box
    </Box>
  </div>
), {
  notes: 'A cor do Box é aplicada numa borta superior.',
}));
