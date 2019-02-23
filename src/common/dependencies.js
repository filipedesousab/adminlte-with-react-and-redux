/**
 * Importações necessárias para funcionamento do AdminLTE
 * "modules" é uma alias configurado no webpack.config.js para node_modules
 */
import 'admin-lte/dist/js/adminlte.min'; // JavaScript do AdminLTE

import 'typeface-source-sans-pro/index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'ionicons/dist/css/ionicons.min.css';
import 'modules/bootstrap/dist/css/bootstrap.min.css'; // Por um motivo desconhecido só funciona com o alias modules

import 'admin-lte/dist/css/AdminLTE.min.css';
import 'admin-lte/dist/css/skins/_all-skins.min.css';

/** Estilos costomizados da aplicação */
import './less/custom.less';
import '../images/favicon.png'; // Só funciona com favicon no nome da imagem
