'use strict';
const {sanitizeEntity} = require('strapi-utils');



module.exports = {
    async createAnimal(ctx) {
        const {nombre, raza, sexo,edadAdulta, mes, aprox} = ctx.params;
        
      try {
        if(!nombre || !raza || !mes || !sexo || !edadAdulta || !aprox ){
            ctx.send("todos los parametros son requeridos")
        }else {
            const meses = parseInt(mes)
            var aproximada = false;
            if(aprox === "true"){
                aproximada = true
            } 
           // console.log(strapi.services)
           const animal= strapi.services.mascota.create({nombre, raza, sexo,edadAdulta, meses, aproximada})
        
            ctx.send(animal)
        }
      } catch (error) {
         ctx.send(error) 
      }

    }
}