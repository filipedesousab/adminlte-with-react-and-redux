import React from 'react';
import PropTypes from 'prop-types';
import genHash from 'random-hash';
import { Tabs } from 'react-bootstrap';

import { Icon, Button, Popover } from '../../';

/**
 * [Tabs, UIE032] Grupo de Abas
 * @param {string} props.defaultActiveKey Identificação da tab a ser aberta por default em Tabs não controladas
 * @param {string} props.activeKey        Identificação da Tab atual aberta, para Tabs controladas
 * @param {string} props.onSelect         Função utilizada para trocar de Tab em um componente controlado, ela retorna o eventKey da TabAção para acionar o Popover, pode ser um array.
 * @param {object} props.children         Tabs a serem exibidas
 */
class TabsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeKey: props.activeKey };
  }

  componentWillReceiveProps(nextProps) {
    let children;
    let nextChildren;

    if (Array.isArray(this.props.children)) {
      children = this.props.children;
    } else {
      children = [this.props.children];
    }

    if (Array.isArray(nextProps.children)) {
      nextChildren = nextProps.children;
    } else {
      nextChildren = [nextProps.children];
    }

    if (nextProps.children.length === children.length) {
      // Se a quantidade de abas for igual após atualização nas props do componente

      if (children.slice(-1)[0].props.eventKey !== nextChildren.slice(-1)[0].props.eventKey) {
        // Se o eventKey da última aba for diferente da próxima última aba,
        // provavelmente é uma atualização na última aba,
        // então atualiza o activeKey para o novo eventKey da aba atualizada
        this.setState({ activeKey: nextChildren.slice(-1)[0].props.eventKey });
      } else {
        // Se o eventKey da última aba for igual da próxima última aba
        // Provavelmente é apenas uma mudança de aba, então troca de aba
        this.setState({ activeKey: nextProps.activeKey });
      }
    } else if (nextChildren.length > children.length) {
      // Se a quantidade de abas recebidas forem maior que a existente,
      // provavelmente foram abertas mais abas

      // Pega o eventKey da ultima aba inserida
      const newActiveKey = nextChildren.slice(-1)[0].props.eventKey;

      // Troca a aba para a ultima inserida
      this.setState({ activeKey: newActiveKey });
    } else if (nextChildren.length < children.length) {
      // Se a quantidade de abas recebidas forem menor que a existente,
      // Provavelmente houveram abas fechadas

      // Verifica se a aba fechada estava selecionada
      const closedSelectedTab = nextChildren.every((value) => {
        if (value.props.eventKey === this.state.activeKey) {
          return false;
        }
        return true;
      });

      // Se a aba fechada estava selecionada
      if (closedSelectedTab) {
        children.every((value, index) => {
          // Localiza no array a aba que foi fechada
          if (value.props.eventKey === this.state.activeKey) {
            let nextSelectedTab = '';

            if (children[index + 1]) {
              // Se houver aba após a fechada, seleciona a próxima aba
              nextSelectedTab = children[index + 1].props.eventKey;
            } else if (children[index - 1]) {
              // Se houver não houver aba após a fechada mas houver uma anterior,
              // seleciona a aba anterior
              nextSelectedTab = children[index - 1].props.eventKey;
            }

            // Troca a aba para a selecionada acima
            this.setState({ activeKey: nextSelectedTab });

            return false;
          }

          return true;
        });
      }
    }
  }

  renderFixButton({ title, fixed, onFix }) {
    if (fixed) {
      // Botão quando a aba estiver fixada
      return (
        <Popover description={`Desfixar ${title}`} delay>
          <Button onClick={onFix} size="small">
            <Icon name="fa fa-lock" color="orange" />
          </Button>
        </Popover>
      );
    }

    // Botão quando a aba não estiver fixada
    return (
      <Popover description={`Fixar ${title}`} delay>
        <Button onClick={onFix} size="small">
          <Icon name="fa fa-unlock-alt" color="green" />
        </Button>
      </Popover>
    );
  }

  renderCloseButton({ title, onClose }) {
    // Botão para fechar aba
    return (
      <Popover description={`Fechar ${title}`} delay>
        <Button onClick={onClose} size="small">
          <Icon name="fa fa-times" />
        </Button>
      </Popover>
    );
  }

  render() {
    const {
      defaultActiveKey,
      id,
      onSelect,
      children,
    } = this.props;

    // Necessário atualizar os títulos se necessário com botões de fixar e fechar das abas
    // antes de passar o children para o Tabs do bootstrap
    const newChildren = React.Children.map(children, (tab, index) => {
      const {
        title,
        animed,
        fixed,
        onClose,
        onFix,
      } = tab.props;

      const newTitle = (
        <React.Fragment>
          <Popover description={title} delay>
            <div className={`title${onClose || onFix ? ' has-button' : ''}${animed ? ' marquee' : ''}`}>
              <span>{title}</span>
            </div>
          </Popover>
          {onFix && this.renderFixButton({ title, fixed, onFix })}
          {onClose && this.renderCloseButton({ title, onClose })}
        </React.Fragment>
      );

      return React.cloneElement(tab, { ...tab.props, title: newTitle, key: index.toString() });
    });

    return (
      <Tabs
        defaultActiveKey={defaultActiveKey}
        activeKey={this.state.activeKey}
        id={genHash()}
        onSelect={onSelect}
      >
        {newChildren}
      </Tabs>
    );
  }
}

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
TabsComponent.defaultProps = {
  defaultActiveKey: undefined,
  activeKey: undefined,
  onSelect: null,
  children: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
TabsComponent.propTypes = {
  defaultActiveKey: PropTypes.string,
  activeKey: PropTypes.string,
  onSelect: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default TabsComponent;
