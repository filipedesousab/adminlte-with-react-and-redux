import React from 'react';
import PropTypes from 'prop-types';
import genHash from 'random-hash';
import { SplitButton, MenuItem } from 'react-bootstrap';

/**
 * [ButtonSplit, UIE007] Botão tipo dropdown
 * @param   {object} props.label     Descrição do botão
 * @param   {string} props.color     Cor em rgb ou exadecimal
 * @param   {string} props.size      Tamanho do botão
 * @param  {boolean} props.dropup    Menu abrir para cima
 * @param  {boolean} props.pullRight Menu abrir para esquerda
 * @param   {string} props.className Corpo do componente
 * @param    {array} props.options   Array de objetos com dados para o menu
 * @param {function} props.onClick   Função a ser executada na ação do click
 */
const ButtonSplitComponent = (props) => {
  /**
   * Id é exigido pelo SplitButton do react-bootstrap.
   * É utilizado para navegação assistiva para acessibilidade (WAI-ARIA).
   */
  let id = 'button-dropdown';
  /**
   * A condição tentarar identificar a descrição no componente Label recebido.
   * Caso localize irá aplicar no id, limpando espaços da borda em branco,
   * Deixando o texto em caixa baixa e substituindo os espaços por "-"
   */
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

  return (
    <SplitButton
      bsStyle={props.color}
      title={props.label}
      bsSize={props.size}
      dropup={props.dropup}
      pullRight={props.pullRight}
      className={props.className}
      id={id}
      onClick={props.onClick}
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
    </SplitButton>
  );
};

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
ButtonSplitComponent.defaultProps = {
  label: null,
  color: null,
  size: null,
  dropup: false,
  pullRight: false,
  className: null,
  options: [],
  onClick: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
ButtonSplitComponent.propTypes = {
  label: PropTypes.node,
  color: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger']),
  size: PropTypes.oneOf(['default', 'large', 'small', 'xsmall']),
  dropup: PropTypes.bool,
  pullRight: PropTypes.bool,
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};

export default ButtonSplitComponent;
