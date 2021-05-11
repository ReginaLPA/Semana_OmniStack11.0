const connection = require('../database/connection'); //conexão com o database

module.exports = {
    async index(request, Response){
        const { page = 1} = request.query;

        const [count] = await connection('Incidents').count();

        const Incidents = await connection('Incidents')
        .join('ongs','ongs_id', 'Incidents.ong_id')
        .limit(5)
        .offset((page -1)* 5)
        .select(['Incidents.*',
         'ongs.name', 
         'ongs.emal',
         'ongs.whatsapp',
          'ongs.city', 
          'ongs.uf']);

        response.header('X-Total-Count',count['count(*)']);//retorna o numero de registro
        return Response.json(Incidents);
    },


    async create(request, reponse){
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('Incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return Response.json({ id });
    },

    async delete(request, response){
        const {id} = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('Incidents')
        .where('id', id)
        .select('ong_id')
        .first();

        if(incident.ong_id != ong_id){
            return response.status(401).json({ error: 'Operation not permitted'});
        }
        await connection('Incidents').where('id',id).delete();

        return response.status(204).send();
    }

};