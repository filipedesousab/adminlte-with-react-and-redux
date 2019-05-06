import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import {
  Button,
  ButtonIcon,
  ButtonDropdown,
  Icon,
  Label,
} from 'common/ui-elements';
import Modal from '.';

storiesOf('ui-elements/modal/WindowModal [WindowModal, UIE024]', module)
  .add('show', () => (
    <Modal show />
  ), {
    notes: `O "show" deve ser passado para abrir o WindowModal.
            Também é possível passar o parâmetro da forma show={true} ou show={false}.`,
  })

  .add('show false', () => (
    <Modal show={false} />
  ), {
    notes: `O "show" deve ser passado para abrir o WindowModal.
            Também é possível passar o parâmetro da forma show={true} ou show={false}.`,
  })

  .add('title', () => (
    <Modal show title={<Label>Título do WindowModal</Label>} />
  ), {
    notes: `O "title" deve ser o [Label, UIE002] e deve ser passado sem a props form.
            É possível usar string, mas o proptypes não está aceitando string para manter um padrão no projeto.`,
  })

  .add('children', () => (
    <Modal show title={<Label>Título do WindowModal</Label>}>Corpo do WindowModal</Modal>
  ), {
    notes: 'O children(Corpo do Modal) pode ser qualquer Elemento React.',
  })

  .add('children grande', () => (
    <Modal show title={<Label>Título do WindowModal</Label>}>
      {[...Array(30).keys()].map(value => (
        <p key={value.toString()}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed posuere metus.
        </p>
      ))}
    </Modal>
  ), {
    notes: 'Diferente do Modal, o WindowModal foi contruído para abrigar um conteúdo extenso.',
  })

  .add('btnFooterLeft', () => (
    <Modal
      show
      title={<Label>Título do WindowModal</Label>}
      btnFooterLeft={[
        <Button><Label>Button</Label></Button>,
        <ButtonDropdown label={<Label>Dropdown</Label>} />,
        <ButtonIcon icon={<Icon name="fa fa-smile-o" />}><Label>ButtonIcon</Label></ButtonIcon>,
      ]}
    >
      Corpo do WindowModal
    </Modal>
  ), {
    notes: 'Botões no footer esquerdo do WindowModal.',
  })

  .add('btnFooterRight', () => (
    <Modal
      show
      title={<Label>Título do WindowModal</Label>}
      btnFooterRight={[
        <Button><Label>Button</Label></Button>,
        <ButtonDropdown label={<Label>Dropdown</Label>} />,
        <ButtonIcon icon={<Icon name="fa fa-smile-o" />}><Label>ButtonIcon</Label></ButtonIcon>,
      ]}
    >
      Corpo do WindowModal
    </Modal>
  ), {
    notes: 'Botões no footer direito do WindowModal.',
  })

  .add('onHide', () => (
    <Modal
      show
      title={<Label>Título do WindowModal</Label>}
      onHide={action('Fechar WindowModal')}
    >
      Corpo do Modal
    </Modal>
  ), {
    notes: `Função executada na ação de fechar modal.
            O WindowModal executa essa função ao clicar no botão "X" ou fora do WindowModal.`,
  });
