import React from 'react';

import { Label, Button, Tabs, Tab, Popover } from '../../common/ui-elements';

class Abas extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeKey: '' };

    this.handleSelectTab = this.handleSelectTab.bind(this);
  }

  handleSelectTab(activeKey) {
    this.setState({ activeKey });
  }

  handleFixTab(activeKey) {
    this.setState({ activeKey });
  }

  render() {
    return (
      <React.Fragment>
        <Tabs activeKey={this.state.activeKey} onSelect={key => this.handleSelectTab(key)}>
          {this.props.abas.map(aba => (
            <Tab
              eventKey={aba.key}
              key={aba.key}
              title={`${aba.medico}`}
              onClose={() => this.props.delAba(aba.key)}
              onFix={() => this.props.fixAba(aba.key)}
              fixed={aba.fixed}
            >
              Conteúdo qualquer da aba: <strong>{aba.medico}</strong>
            </Tab>
          ))}
        </Tabs>
        <br />
        <Popover description="Teste adicionar aba com a ultima sola ou travada">
          <Button onClick={this.props.addAba}><Label>Adicionar aba</Label></Button>
        </Popover>
      </React.Fragment>
    );
  }
}

export default Abas;
