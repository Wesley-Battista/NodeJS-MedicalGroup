var http = require('http');
var dt = require('./myfirstmodule');
var dt1 = require('./home');
var dt2 = require('./cadastro_cliente');
var dt3 = require('./cadastro_medico');
var dt4 = require('./login');
var dt5 = require('./planos');
var dt6 = require('./medicos');
var dt7 = require('./consultas');
var dt8 = require('./pagamentos');
var dt9 = require('./sobrenos');
var dt10 = require('./suporte');
var dt11 = require('./agendamentos');
var dt12 = require('./configuracoes');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.write("The date and time is currently: " + dt.myDateTime());

  res.write(dt1.mg());

  res.write(dt2.mycadcli());

  res.write(dt3.mycadmed());

  res.write(dt4.mylog());

  res.write(dt5.mypla());

  res.write(dt6.mymed());

  res.write(dt7.mycon());

  res.write(dt8.mypag());

  res.write(dt9.mysbn());

  res.write(dt10.mysup());

  res.write(dt11.myage());

  res.write(dt12.mycfg());


  res.end();
}).listen(5009);

