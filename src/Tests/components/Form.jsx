import React from 'react';

import { Grid } from '../../common/ui-layout';
import {
  Label,
  Icon,
  ButtonSplit as Button,
  Input,
  Select,
  SelectMultiple,
  Checkbox,
  Radio,
  Popover,
  Tooltip,
  InputFile,
} from '../../common/ui-elements';

class FormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showBtnAlert: false,
      alertTitle: '',
      alertMsg: '',
      alertColor: 'success',
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleMsg = this.handleMsg.bind(this);
    this.handleColor = this.handleColor.bind(this);
  }

  handleTitle(e) {
    this.setState({ alertTitle: e.target.value });
  }

  handleMsg(e) {
    this.setState({ alertMsg: e.target.value });
  }

  handleColor(e) {
    this.setState({ alertColor: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <Grid.Row>
          <Grid.Col md={3} sm={4}>
            <Popover description="Titulo do alert">
              <Input
                label={<Label>Titulo do Alert</Label>}
                value={this.state.alertTitle}
                onChange={this.handleTitle}
              />
            </Popover>
          </Grid.Col>
          <Grid.Col md={3} sm={4}>
            <Popover description="Mensagem do alert">
              <Input
                label={<Label>Mensagem do Alert</Label>}
                value={this.state.alertMsg}
                onChange={this.handleMsg}
              />
            </Popover>
          </Grid.Col>
          <Grid.Col md={3} sm={4}>
            <Popover description="Cor do alert">
              <Select
                label={<Label>Cor do Alert</Label>}
                value={this.state.alertColor}
                onChange={this.handleColor}
                options={[{ value: 'danger', label: 'Danger' },
                  { value: 'warning', label: 'Warning' },
                  { value: 'success', label: 'Success' },
                  { value: 'info', label: 'Info' },
                ]}
              />
            </Popover>
          </Grid.Col>
        </Grid.Row>
        <Popover description="Ativar Alerts">
          <Checkbox
            checked={this.state.showBtnAlert}
            label={<Label>Ativar Alerts</Label>}
            onChange={e => this.setState({ showBtnAlert: e.target.checked })}
            style={{ width: '100px' }}
          />
        </Popover>
        {this.state.showBtnAlert &&
        <React.Fragment>
          <Radio
            checked={this.state.alertType === 'alert'}
            label={<Label>Alert</Label>}
            onChange={e => this.setState({ alertType: e.target.checked && 'alert' })}
            style={{ width: '100px' }}
          />
          <Radio
            checked={this.state.alertType === 'alertPopup'}
            label={<Label>AlertPopup</Label>}
            onChange={e => this.setState({ alertType: e.target.checked && 'alertPopup' })}
            style={{ width: '100px' }}
          />
          <Tooltip description="Dica no Tooltip">
            <Button
              icon={<Icon name="fa fa-fa" />}
              label="Adicionar alert"
              options={[{
                label: <Label>Op1</Label>,
                onClick: () => this.props.addAlertPopup({
                  title: this.state.alertTitle,
                  body: this.state.alertMsg,
                  color: this.state.alertColor,
                }),
              }]}
              onClick={
                () => {
                  if (this.state.alertType === 'alert') {
                    this.props.addAlert({
                      title: this.state.alertTitle,
                      body: this.state.alertMsg,
                      color: this.state.alertColor,
                    });
                  } else if (this.state.alertType === 'alertPopup') {
                    this.props.addAlertPopup({
                      title: this.state.alertTitle,
                      body: this.state.alertMsg,
                      color: this.state.alertColor,
                    });
                  }
                }
              }
            >
              <Label>Adicionar alert</Label>
            </Button>
          </Tooltip>
        </React.Fragment>
        }
        <Tooltip description="Só para testar o InputFile">
          <InputFile
            label={<Label>Insira uma imagem</Label>}
          />
        </Tooltip>
        <Grid.Row>
          <Grid.Col md={3} sm={4}>
            <Popover description="Titulo do alert">
              <SelectMultiple
                label={<Label>Titulo do Alert</Label>}
                onChange={e => console.log(e, e.target.options)}
                options={[{
                  value: 'red',
                  label: 'Vermelho',
                }, {
                  value: 'green',
                  label: 'Verde',
                }, {
                  value: 'blue',
                  label: 'Azul',
                }]}
              />
            </Popover>
          </Grid.Col>
        </Grid.Row>
      </React.Fragment>
    );
  }
}

export default FormComponent;
