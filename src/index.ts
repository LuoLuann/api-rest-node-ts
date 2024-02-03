import { server } from './server/Server'
import 'dotenv/config'

server.listen(process.env.PORT, () => {
    console.log(`servidor rodando na porta: ${process.env.PORT}`);
});
