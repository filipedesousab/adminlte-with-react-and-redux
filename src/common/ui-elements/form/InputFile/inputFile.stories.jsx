import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import { Label } from 'common/ui-elements';
import InputFile from './';

storiesOf('ui-elements/form/InputFile [InputFile, UIE016]', module)
  .add('input com id', () => (
    <InputFile id="um-id-teste" />
  ), {
    notes: 'Inspecionar id "um-id-teste" no HTML do input.',
  })

  .add('input sem id', () => (
    <InputFile />
  ), {
    notes: 'Inspecionar id com uma hash aleatória no HTML do input.',
  })

  .add('label', () => (
    <InputFile label={<Label>InputFile</Label>} />
  ), {
    notes: `O "label" deve ser o [Label, UIE002] e deve ser passado sem a props form.
            É possível usar string, mas o proptypes não está aceitando string para manter um padrão no projeto.`,
  })

  .add('helpBlock', () => (
    <InputFile
      label={<Label>InputFile com helpBlock</Label>}
      helpBlock="Esse é um helpBlock string."
    />
  ), {
    notes: 'O "helpBlock" é para passar alguma informação ao usuário.',
  })

  .add('helpBlock Label', () => (
    <InputFile
      label={<Label>InputFile com helpBlock Label</Label>}
      helpBlock={<Label>Esse é um helpBlock Label.</Label>}
    />
  ), {
    notes: 'O "helpBlock" é para passar alguma informação ao usuário.',
  })

  .add('state', () => ['success', 'warning', 'error'].map((state, index) => (
    <React.Fragment key={index.toString()}>
      <InputFile
        label={<Label>InputFile {state}</Label>}
        helpBlock={<Label>Help Block {state}.</Label>}
        state={state}
      />
      <br />
    </React.Fragment>
  )), {
    notes: 'O "state" permite alertar o usuário com as cores.',
  })

  .add('state e size', () => [null, 'success', 'warning', 'error'].map((state, index) => ['large', null, 'small'].map((size, index2) => (
    <React.Fragment key={`${index.toString()}${index2.toString()}`}>
      <InputFile
        label={<Label>size {`${size}`} - Label mantém o mesmo tamanho</Label>}
        helpBlock={<Label>size {`${size}`} - Help Block mantém o mesmo tamanho.</Label>}
        state={state}
        size={size}
      />
      <br />
    </React.Fragment>
  ))), {
    notes: `O "state" permite alertar o usuário com as cores.
            O "size" permite alterar o tamanho do input. Para o padrão deve passar "size" como null.`,
  })

  .add('disabled', () => (
    <InputFile disabled label={<Label>InputFile disabled</Label>} />
  ), {
    notes: 'O "disabled" permite desabilitar o campo. Tem o mesmo funcionamento do "readOnly".',
  })

  .add('onChange', () => (
    <InputFile
      label={<Label>InputFile com onChange</Label>}
      onChange={(e, f) => {
        console.log('target: ', e);
        console.log('Nome do arquio: ', f);
      }}
    />
  ), {
    notes: `Quando é selecionado um arquivo essa função é executada.
            É passado como primeiro parâmetro o target e segundo o nome do arquivo.`,
  })

  .add('className', () => (
    <InputFile
      label={<Label>InputFile com class &quot;um-teste&quot;</Label>}
      className="um-teste"
    />
  ), {
    notes: `É possível passar livremente class pelo "className".
            Verificar a class "um-teste" junto a class "radio" na div superior.`,
  });
