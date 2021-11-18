'use strict';
const {sanitizeEntity} = require('strapi-utils');



module.exports = {
    async createAnimal(ctx) {
        const {nombre, raza, sexo,edadAdulta,edadAprox, mes, aprox} = ctx.request.body;
        try {
            var aproximada = false;
          
                const meses = parseInt(mes)
                if(aprox === "true"){
                    aproximada = true
                } 
             console.log(strapi.services)
            console.log(ctx.request.body)
           const animal= await strapi.services.mascota.create({nombre,raza, sexo,edadAdulta, edadAprox, meses, aproximada})
        
            ctx.send(animal)
        
      } catch (error) {
         ctx.send(error) 
      }

    }
}