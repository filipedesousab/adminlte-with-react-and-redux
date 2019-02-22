/**
 * Importações necessárias para funcionamento do AdminLTE
 * "modules" é uma alias configurado no webpack.config.js para node_modules
 */
import 'modules/admin-lte/dist/js/adminlte.min';

import 'modules/font-awesome/css/font-awesome.min.css';
import 'modules/ionicons/dist/css/ionicons.min.css';
import 'modules/bootstrap/dist/css/bootstrap.min.css';

import 'modules/admin-lte/dist/css/AdminLTE.min.css';
import 'modules/admin-lte/dist/css/skins/_all-skins.min.css';

/** Estilos costomizados da aplicação */
import './less/custom.less';
import '../images/favicon.png'; // Só funciona com favicon no nome da imagem
