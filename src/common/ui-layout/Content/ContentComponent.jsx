import React, { Component } from 'react';

import Breadcrumb from './containers/Breadcrumb';
import Alerts from './containers/Alerts';

/**
 * [Content, UIL003] Recebe o conteúdo da página
 * @param {object} props.title      Título da página [Label, UIE002]
 * @param {object} props.subtitle   Subtitulo da página [Label, UIE002]
 * @param  {array} props.breadcrumb Breadcrumb da página [{ label: ‘’, path: ‘’ }]
 * @param {object} props.children   Conteúdo da página
 * @param {object} props.footer     Rodapé da página
 */
class ContentComponent extends Component {

  /** Executado pelo react antes de montar o componente */
  componentWillMount() {
    if (this.props.title) {
      this.props.changeTitle(this.props.title);
    }

    if (this.props.subtitle) {
      this.props.changeSubtitle(this.props.subtitle);
    }

    if (this.props.breadcrumb) {
      this.props.changeBreadcrumb(this.props.breadcrumb);
    }
  }

  render() {
    return (
      <div>
        <Alerts />
        <div className="content-header">
          <h1>{this.props.contentTitle}
            {this.props.contentSubtitle ? <small>{this.props.subtitle}</small> : false}
          </h1>
          <Breadcrumb />
        </div>
        <div className="content">
          {this.props.children}
        </div>
        <div className="content-footer">
          {this.props.footer}
        </div>
      </div>
    );
  }
}

export default ContentComponent;
