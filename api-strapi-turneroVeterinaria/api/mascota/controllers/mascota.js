'use strict';
const {sanitizeEntity, parseMultipartData,} = require('strapi-utils');



module.exports = {
    async createAnimal(ctx) {
        const {nombre, raza, sexo,fechaNacimiento,edadAprox, meses, aprox} = ctx.request.body;
        const date = new Date();
        const obj ={
            nombre,
            raza,
            sexo,
            fechaNacimiento,
            aproximada,
            meses

        };
        var aproximada = false;
      
        if(aprox === "true"){
                aproximada = true
               // console.log(ctx.request.body)
                const aprox=parseInt(edadAprox)
               
                    const newDate = date.getFullYear()-aprox + "-" + (date.getMonth() + 1) + "-" + date.getDate();
                    obj.fechaNacimiento = newDate;
        } 
        if(meses > 0){
            const newDate = date.getFullYear() + "-" + (date.getMonth() + 1 - meses) + "-" + date.getDate();
            obj.fechaNacimiento = newDate;
        
        }
        
        obj.aproximada = aproximada;
        console.log(obj)
     

        try {
          

            let entity;
            if (ctx.is('mascota')) {
              const { data, files } = parseMultipartData(ctx);
              
              entity = await strapi.services.mascota.create(data, { files });
            } else {
              entity = await strapi.services.mascota.create(obj);
            }
            return sanitizeEntity(entity, { model: strapi.models.mascota });
        
      } catch (error) {
         ctx.send(error) 
      }

    }
}