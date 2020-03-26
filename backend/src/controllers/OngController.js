/**
 * Rota / Recursos
 */

/**
 * Métodos HTTP:
 * 
 * GET: buscar um informação do back-end
 * POST: Criar uma informaçãono back-end
 * PUT: Alterar uma in formação no back-end
 * DELETE:Deletar uma informação no back-end
 */

/**
 * tipos de parâmetros:
 * 
 * Query:Parâmetros nomedos enviados na rota após '?' (Filtros/Paginação)
 * Route Params: Parâmetros utilizados ára identificar recursos
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */
/**
 * SQL: MYSQL, SQLite, PostgreSQL, Oracle, Microsoft SQL server
 * NoSQL: MongoDB CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: Tablet('users).Slect('*).where()
 */
const crypto = require('crypto');

const connection = require('../database/connection'); //conexão com o database


module.exports = {
    async index(request, response) { //retorna a lista de ongs cadastrada
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;
        // console.log(data);
    
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        //return response.send('Hello Word!');
        return response.json({ id });   //se desejar configure o JSON Viewer para melhirar a visualização
    
    }
};