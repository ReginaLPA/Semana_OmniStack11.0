const connection = require('../database/connection'); //conexão com o database

module.exports = {
    async index(request, Response){
        const ong_id = request.headers.authorization;

        const Incidents = await connection('Incidents')
        .where('ong_id', ong_id)
        .select('*')
        return Response.json(Incidents);
    }
}