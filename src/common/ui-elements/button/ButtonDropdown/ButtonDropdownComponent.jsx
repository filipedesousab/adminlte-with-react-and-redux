import React from 'react';
import PropTypes from 'prop-types';
import genHash from 'random-hash';
import { DropdownButton, MenuItem } from 'react-bootstrap';

/**
 * [ButtonDropdown, UIE006] Botão tipo dropdown
 * @param  {object} props.label     Descrição do botão
 * @param  {string} props.color     Cor em rgb ou exadecimal
 * @param  {string} props.size      Tamanho do botão
 * @param {boolean} props.dropup    Menu abrir para cima
 * @param {boolean} props.pullRight Menu abrir para esquerda
 * @param  {string} props.className Corpo do componente
 * @param   {array} props.options   Array de objetos com dados para o menu
 */
const ButtonDropdownComponent = (props) => {
  /**
   * Id é exigido pelo DropdownButton do react-bootstrap.
   * É utilizado para navegação assistiva para acessibilidade (WAI-ARIA).
   */
  let id = 'button-dropdown';
  /**
   * A condição tentarar identificar a descrição no componente Label recebido.
   * Caso localize irá aplicar no id, limpando espaços da borda em branco,
   * Deixando o texto em caixa baixa e substituindo os espaços por "-"
   */
  if (props.label) {
    if (typeof props.label.props.children === 'string') {
      const text = props.label.props.children;
      id = text.trim().toLocaleLowerCase().replace(/ /g, '-');
    } else if (Array.isArray(props.label.props.children)) {
      props.label.props.children.forEach((value) => {
        if (typeof value === 'string') {
          const text = value;
          id = text.trim().toLocaleLowerCase().replace(/ /g, '-');
        }
      });
    }
  }

  return (
    <DropdownButton
      bsStyle={props.color}
      title={props.label}
      bsSize={props.size}
      dropup={props.dropup}
      pullRight={props.pullRight}
      className={props.className}
      id={id}
    >
      {props.options.map((item) => {
        if (item.divider) {
          /** Linha horizonal que separa as opções */
          return <MenuItem divider key={genHash()} />;
        } else if (item.header) {
          /** Texto sem link, pode ser utilizado para identificar seções de opções */
          return <MenuItem header key={genHash()}>{item.label}</MenuItem>;
        }
        return (
          /**
           * Ítem do menu com possibilidade de link e função de click.
           * O disable deixa o item desabilitado.
           * O label é a descrição do item.
           */
          <MenuItem
            disabled={item.disabled}
            href={item.href}
            key={genHash()}
            onClick={item.onClick}
          >
            {item.label}
          </MenuItem>
        );
      })}
    </DropdownButton>
  );
};

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
ButtonDropdownComponent.defaultProps = {
  label: '',
  color: 'default',
  size: null,
  dropup: false,
  pullRight: false,
  className: null,
  options: [],
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
ButtonDropdownComponent.propTypes = {
  label: PropTypes.node,
  color: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger']),
  size: PropTypes.oneOf(['default', 'large', 'small', 'xsmall']),
  dropup: PropTypes.bool,
  pullRight: PropTypes.bool,
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
};

export default ButtonDropdownComponent;
