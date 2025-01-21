import express from 'express';
import { SomaController } from './desafio1/controllers/somaController';
import { FibonacciController } from './desafio2/controllers/fibonacciController';
import { FaturamentoController } from './desafio3/controllers/faturamentoController';
import { EstadoFaturamentoController } from './desafio4/controllers/estadoFaturamentoController';
import { StringController } from './desafio5/controllers/stringController';


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', SomaController);

app.use('/api', FibonacciController);

app.use('/api', FaturamentoController);

app.use('/api', EstadoFaturamentoController);

app.use('/api', StringController)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
