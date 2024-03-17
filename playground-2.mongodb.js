db.createCollection("nuevosUsuarios")


// db.nuevosUsuarios.insertMany([
//     {
//         Nombre: "María",
//         Apellido: "García",
//         Ciudad: "Bogotá",
//         País: "Colombia",
//         Salario: 3000,
//         Edad: 35,
//         Estatura: 165,
//         Peso: 60
//     },

//     {
//         Nombre: "Pedro",
//         Apellido: "Martínez",
//         Ciudad: "Medellín",
//         País: "Colombia",
//         Salario: 3200,
//         Edad: 28,
//         Estatura: 180,
//         Peso: 80
//     },

//     {
//         Nombre: "Ana",
//         Apellido: "López",
//         Ciudad: "Cali",
//         País: "Colombia",
//         Salario: 2800,
//         Edad: 45,
//         Estatura: 160,
//         Peso: 65
//     },

//     {
//         Nombre: "Carlos",
//         Apellido: "Sánchez",
//         Ciudad: "Cartagena",
//         País: "Colombia",
//         Salario: 3100,
//         Edad: 32,
//         Estatura: 175,
//         Peso: 70
//     },

//     {
//         Nombre: "Laura",
//         Apellido: "Gómez",
//         Ciudad: "Barranquilla",
//         País: "Colombia",
//         Salario: 2900,
//         Edad: 37,
//         Estatura: 170,
//         Peso: 65
//     },

//     {
//         Nombre: "Javier",
//         Apellido: "Pérez",
//         Ciudad: "Bogotá",
//         País: "Colombia",
//         Salario: 3000,
//         Edad: 29,
//         Estatura: 178,
//         Peso: 75
//     },

//     {
//         Nombre: "Sofía",
//         Apellido: "Martínez",
//         Ciudad: "Medellín",
//         País: "Colombia",
//         Salario: 3300,
//         Edad: 31,
//         Estatura: 165,
//         Peso: 60
//     },

//     {
//         Nombre: "Andrés",
//         Apellido: "Hernández",
//         Ciudad: "Cali",
//         País: "Colombia",
//         Salario: 2800,
//         Edad: 40,
//         Estatura: 180,
//         Peso: 80
//     },

//     {
//         Nombre: "Marcela",
//         Apellido: "Gómez",
//         Ciudad: "Cartagena",
//         País: "Colombia",
//         Salario: 3100,
//         Edad: 33,
//         Estatura: 170,
//         Peso: 70
//     },

//     {
//         Nombre: "Diego",
//         Apellido: "Londoño",
//         Ciudad: "Barranquilla",
//         País: "Colombia",
//         Salario: 3000,
//         Edad: 34,
//         Estatura: 175,
//         Peso: 75
//     },

//     {
//         Nombre: "Valentina",
//         Apellido: "Sánchez",
//         Ciudad: "Bogotá",
//         País: "Colombia",
//         Salario: 3200,
//         Edad: 30,
//         Estatura: 160,
//         Peso: 65
//     },

//     {
//         Nombre: "Andrea",
//         Apellido: "Pérez",
//         Ciudad: "Medellín",
//         País: "Colombia",
//         Salario: 3300,
//         Edad: 28,
//         Estatura: 165,
//         Peso: 60
//     },

//     {
//         Nombre: "Gabriel",
//         Apellido: "García",
//         Ciudad: "Cali",
//         País: "Colombia",
//         Salario: 2800,
//         Edad: 42,
//         Estatura: 180,
//         Peso: 80
//     },

//     {
//         Nombre: "Daniela",
//         Apellido: "Martínez",
//         Ciudad: "Cartagena",
//         País: "Colombia",
//         Salario: 3100,
//         Edad: 27,
//         Estatura: 170,
//         Peso: 70
//     },

//     {
//         Nombre: "Alejandro",
//         Apellido: "Gómez",
//         Ciudad: "Barranquilla",
//         País: "Colombia",
//         Salario: 3000,
//         Edad: 36,
//         Estatura: 175,
//         Peso: 75
//     },

//     {
//         Nombre: "Paula",
//         Apellido: "López",
//         Ciudad: "Bogotá",
//         País: "Colombia",
//         Salario: 3200,
//         Edad: 31,
//         Estatura: 160,
//         Peso: 65
//     },
 
//     {
//         Nombre: "Sebastián",
//         Apellido: "Ramírez",
//         Ciudad: "Medellín",
//         País: "Colombia",
//         Salario: 3300,
//         Edad: 29,
//         Estatura: 165,
//         Peso: 60
//     },

//     {
//         Nombre: "Carolina",
//         Apellido: "Hernández",
//         Ciudad: "Cali",
//         País: "Colombia",
//         Salario: 2800,
//         Edad: 38,
//         Estatura: 180,
//         Peso: 80
//     },

//     {
//         Nombre: "Juan",
//         Apellido: "Ramírez",
//         Ciudad: "Bogotá",
//         País: "Colombia",
//         Salario: 3200,
//         Edad: 33,
//         Estatura: 175,
//         Peso: 70
//     },

//     {
//         Nombre: "Camila",
//         Apellido: "Gutiérrez",
//         Ciudad: "Medellín",
//         País: "Colombia",
//         Salario: 3100,
//         Edad: 36,
//         Estatura: 168,
//         Peso: 63
//     },

//     {
//         Nombre: "Andrés",
//         Apellido: "Díaz",
//         Ciudad: "Cali",
//         País: "Colombia",
//         Salario: 2900,
//         Edad: 42,
//         Estatura: 172,
//         Peso: 78
//     },

//     {
//         Nombre: "Valeria",
//         Apellido: "López",
//         Ciudad: "Cartagena",
//         País: "Colombia",
//         Salario: 3300,
//         Edad: 29,
//         Estatura: 169,
//         Peso: 61
//     },

//     {
//         Nombre: "Felipe",
//         Apellido: "Martínez",
//         Ciudad: "Barranquilla",
//         País: "Colombia",
//         Salario: 3100,
//         Edad: 38,
//         Estatura: 177,
//         Peso: 72
//     },

//     {
//         Nombre: "Daniela",
//         Apellido: "Gómez",
//         Ciudad: "Bogotá",
//         País: "Colombia",
//         Salario: 3200,
//         Edad: 31,
//         Estatura: 163,
//         Peso: 64
//     },

//     {
//         Nombre: "Juan",
//         Apellido: "Pérez",
//         Ciudad: "Medellín",
//         País: "Colombia",
//         Salario: 3000,
//         Edad: 35,
//         Estatura: 175,
//         Peso: 75
//     },

//     {
//         Nombre: "Valentina",
//         Apellido: "Hernández",
//         Ciudad: "Cali",
//         País: "Colombia",
//         Salario: 2800,
//         Edad: 29,
//         Estatura: 170,
//         Peso: 68
//     },

//     {
//         Nombre: "Andrés",
//         Apellido: "Sánchez",
//         Ciudad: "Cartagena",
//         País: "Colombia",
//         Salario: 3000,
//         Edad: 33,
//         Estatura: 180,
//         Peso: 80
//     },

//     {
//         Nombre: "Sofía",
//         Apellido: "Ramírez",
//         Ciudad: "Barranquilla",
//         País: "Colombia",
//         Salario: 3100,
//         Edad: 32,
//         Estatura: 170,
//         Peso: 70
//     },

//     {
//         Nombre: "Diego",
//         Apellido: "García",
//         Ciudad: "Bogotá",
//         País: "Colombia",
//         Salario: 2900,
//         Edad: 36,
//         Estatura: 175,
//         Peso: 73
//     },

//     {
//         Nombre: "Carolina",
//         Apellido: "Gómez",
//         Ciudad: "Medellín",
//         País: "Colombia",
//         Salario: 3300,
//         Edad: 30,
//         Estatura: 165,
//         Peso: 68
//     },

//     {
//         Nombre: "Alejandro",
//         Apellido: "Martínez",
//         Ciudad: "Cali",
//         País: "Colombia",
//         Salario: 3200,
//         Edad: 31,
//         Estatura: 178,
//         Peso: 76
//     },

//     {
//         Nombre: "María",
//         Apellido: "Hernández",
//         Ciudad: "Cartagena",
//         País: "Colombia",
//         Salario: 3100,
//         Edad: 34,
//         Estatura: 172,
//         Peso: 71
//     },

//     {
//         Nombre: "Javier",
//         Apellido: "Sánchez",
//         Ciudad: "Barranquilla",
//         País: "Colombia",
//         Salario: 3000,
//         Edad: 38,
//         Estatura: 176,
//         Peso: 74
//     },

//     {
//         Nombre: "Laura",
//         Apellido: "Ramírez",
//         Ciudad: "Bogotá",
//         País: "Colombia",
//         Salario: 2900,
//         Edad: 33,
//         Estatura: 168,
//         Peso: 67
//     },

//     {
//         Nombre: "Andrea",
//         Apellido: "Gómez",
//         Ciudad: "Medellín",
//         País: "Colombia",
//         Salario: 3300,
//         Edad: 29,
//         Estatura: 164,
//         Peso: 63
//     },

//     {
//         Nombre: "Daniel",
//         Apellido: "Pérez",
//         Ciudad: "Cali",
//         País: "Colombia",
//         Salario: 2800,
//         Edad: 40,
//         Estatura: 182,
//         Peso: 82
//     },

//     {
//         Nombre: "Paula",
//         Apellido: "Martínez",
//         Ciudad: "Cartagena",
//         País: "Colombia",
//         Salario: 3100,
//         Edad: 32,
//         Estatura: 169,
//         Peso: 69
//     },

//     {
//         Nombre: "Juan",
//         Apellido: "Gómez",
//         Ciudad: "Barranquilla",
//         País: "Colombia",
//         Salario: 3000,
//         Edad: 37,
//         Estatura: 176,
//         Peso: 73
//     },

//     {
//         Nombre: "Valeria",
//         Apellido: "Sánchez",
//         Ciudad: "Bogotá",
//         País: "Colombia",
//         Salario: 3200,
//         Edad: 31,
//         Estatura: 167,
//         Peso: 68
//     }
    
    
// ]);



//Incrementar el salario de todos los usuarios en un 10%.
db.nuevosUsuarios.updateMany(
    { Salario: { $exists: true} },
    [
       {
          $set: {
            Salario: { $multiply: ["$Salario", 1.1] } 
          }
       }
    ]
);

// db.nuevosUsuarios.updateMany(
//     {
//         Ciudad: ""
//     },
//     {
//         $set:{
//             Salario: {$multiply:["$Salario",1.1]}
//         }
//     }
// );  




//Cambiar la ciudad de residencia de los usuarios que actualmente viven en "New York" a "Los Ángeles".
db.nuevosUsuarios.updateMany(
    {
        Ciudad: "Barranquilla"
    },
    {
        $set:{
        Ciudad: "Cartagena"
        }
    }
);




//Agregar el correo electrónico "nuevo@correo.com" al usuario con nombre "Juan" y apellido "Perez".
db.nuevosUsuarios.updateMany(
    {
        Nombre: "Juan"
    },
    {
        $set:{
            Correo: "nuevo@correo.com"
        }
    }
);




//Actualizar la edad del usuario con correo electrónico "ejemplo@correo.com" a 35 años.
db.nuevosUsuarios.updateMany(
    {
        Correo:"nuevo@correo.com"
    },
    {
        $set:{
            Edad:40
        }
    }
);




//Cambiar el país de residencia de los usuarios que son de "Mexico" a "Canada".
db.nuevosUsuarios.updateMany(
    {
        Nombre: "Pedro"
        //Ciudad:"medellin"
    },
    {
        $set:{
            Ciudad:"Bogotá"
        }
    }
);



//Aumentar la altura de todos los usuarios en 5 centímetros.
db.nuevosUsuarios.updateMany(
    {
        Estatura:{$exists: true}
    },
    [
        {
            $set: {
              Estatura: {$add:["$Estatura",5]}
            }
        }
    ]
);




//Cambiar el apellido del usuario con correo electrónico "otro@ejemplo.com" a "González".
db.nuevosUsuarios.updateMany(
    {
        Correo:"nuevo@correo.com"
    },
    {
        $set:{
            Apellido: "González"
        }
    }
);




//Actualizar el peso del usuario con nombre "Maria" a 140 libras.
db.nuevosUsuarios.updateMany(
    {
        Nombre:"Pedro"
    },
    {
        $set:{
            Peso: 140
        }
    }
);

//Incrementar el salario de todos los usuarios que son de "Estados Unidos" en un 15%.
db.nuevosUsuarios.updateMany(
    {
        Ciudad:"Cartagena"
    },
    [
        {
            $set:{
                Salario: { $multiply: ["$Salario",1.15] }
            }
        }
    ]
);



//Actualizar el correo electrónico del usuario con nombre "Pedro" a "nuevo_correo@riwi.co".
db.nuevosUsuarios.updateMany(
    {
        Nombre:"Pedro"
    },
    {
        $set:{
            Correo: "nuevo_correo@riwi.co"
        }
    }
);




//Cambiar la edad de todos los usuarios menores de 30 años a 30 años.
db.nuevosUsuarios.updateMany(
    {
        Edad:{$lt:30}
    },
    {
        $set:{
            Edad: 30
        }
    }
);




//Incrementar el salario de los usuarios que tienen un salario inferior a 3000 dólares en un 20%.
db.nuevosUsuarios.updateMany(
    {
        Salario:{$lt:3000}
    },
    [
        {
            $set: {
              Salario: {$multiply:["$Salario",1.2]}
            }
        }
    ]
);




//Actualizar la ciudad de residencia de todos los usuarios que actualmente viven en "Bogotá" a "Medellín".
db.nuevosUsuarios.updateMany(
    {
        Ciudad: "Bogotá"
    },
    {
        $set:{
        Ciudad: "medellin"
        }
    }
);




//Cambiar el país de residencia de los usuarios con un salario superior a 5000 dólares a "Australia".
db.nuevosUsuarios.updateMany(
    {
        Salario:{$gt:5000}
    },
    {
        $set:{
            País:"Australia"
        }
        
    }
);




//Reducir la edad de todos los usuarios que tienen más de 50 años en 5 años.
db.nuevosUsuarios.updateMany(
    {
        Edad:{$eq:40}
    },
    {
        $set:{
            Edad:{$add:["$Edad",5]}
        }
    }
);




//Actualizar el peso de los usuarios que pesan más de 200 libras a 180 libras.
db.nuevosUsuarios.updateMany(
    { 
        Peso:{$eq: 80}
    },
    {
        $set:{
            Peso: 75
        }
    }
);




//Incrementar el salario de los usuarios que viven en "London" en un 25%.
db.nuevosUsuarios.updateMany(
    {
        Ciudad:{$eq:"Bogotá"}
    },
    {
        $set:{
            Salario:{$multiply:["$Salario",1.25]}
        }
    }
);




//Cambiar el apellido de los usuarios con un salario superior a 4000 dólares a "Smith".
db.nuevosUsuarios.updateMany(
    {
        Salario:{$gt:4000}
    },
    {
        $set:{
            Apellido: "Smith"
        }
    }
);




//Actualizar el correo electrónico de todos los usuarios cuyo nombre empiece por "A" a "nuevo@riwi.es".
db.nuevosUsuarios.updateMany(
    {
        Nombre:{$regex:/^A/}
    },
    {
        $set:{
            Correo: "nuevo@riwi.es"
        }
    }
);




//Cambiar la ciudad de residencia de los usuarios con una altura inferior a 160 centímetros a "París".
db.nuevosUsuarios.updateMany(
    {
        Estatura:{$lt: 160}
    },
    {
        $set:{
            País: "Francia" ,
            Ciudad:"París"
        }
    },
    
);






//Operaciones de Eliminación


//Eliminar todos los usuarios que tienen un salario menor que 2000 dólares.
db.nuevosUsuarios.deleteMany(
    {Salario: {$lt: 2000}}
);




//Eliminar usuarios que tienen una edad menor que 25 años.
db.nuevosUsuarios.deleteMany(
    {
        Edad:{$lt: 25}
    }
);




//Borrar todos los usuarios que viven en "París".
db.nuevosUsuarios.deleteMany(
    {
        Ciudad:{$eq:"París"}
    }
);



//Eliminar usuarios que tienen un peso superior a 180 libras.
db.nuevosUsuarios.deleteMany(
    {
        Peso:{$gt: 90}
    }
);




//Eliminar usuarios que tienen una altura inferior a 160 centímetros.
db.nuevosUsuarios.deleteMany(
    {
        Estatura:{$lt: 160}
    }
);






//Eliminar todos los usuarios que tienen el nombre "John" y el apellido "Doe".
db.nuevosUsuarios.deleteMany(
    {
        $and:[
            {Nombre:{$eq:"Carlos"}},
            {Apellido:{$eq:"Smith"}}
        ]
    }
);




//Borrar usuarios que tienen una dirección de correo electrónico específica, por ejemplo, "borrar@riwi.com".
db.nuevosUsuarios.deleteMany(
    {
        Correo:{$eq:"nuevo_correo@riwi.co"}
    }
);





//Eliminar usuarios que no tienen una dirección de correo electrónico registrada.
db.nuevosUsuarios.deleteMany(
    {
        Correo:{$exists: false}
    }
);




//Eliminar usuarios que viven en "Tokyo".
db.nuevosUsuarios.deleteMany(
    {
        Ciudad:{$eq:"Tokyo"}
    }
);




//Borrar todos los usuarios que son menores de 18 años.
db.nuevosUsuarios.deleteMany(
    {
        Edad:{$lt: 18}
    }
);




//Eliminar usuarios que tienen un salario igual a 0.
db.nuevosUsuarios.deleteMany(
    {
        Salario:{$eq: 0}
    }
);




//Borrar usuarios que viven en "New York" y tienen un salario superior a 5000 dólares.
db.nuevosUsuarios.deleteMany(
    {
        $and:[
            {Ciudad:{$eq:"Bogotá"}},
            {Salario:{$gt: 4500}}
        ]
    }
);




//Eliminar usuarios que tienen una dirección de correo electrónico que contiene la palabra "spam".
db.nuevosUsuarios.deleteMany(
    {
        Correo:{$regex:/co$/}
    }
);




//Borrar usuarios que viven en "Bello" y tienen más de 50 años.
db.nuevosUsuarios.deleteMany(
    {
        $and:[
            {Ciudad:{$eq:"Medellín"}},
            {Edad:{$gt: 50}}
        ]
    }
);





//Eliminar todos los usuarios que tienen el apellido "González".
db.nuevosUsuarios.deleteMany(
    {
        Apellido:{$eq:"González"}
    }
);





//Borrar usuarios que tienen una edad superior a 70 años.
db.nuevosUsuarios.deleteMany(
    {
        Edad:{$gt:70}
    }
);




//Eliminar usuarios que tienen un país de residencia igual a "Canadá" y un salario inferior a 4000 dólares.
db.nuevosUsuarios.deleteMany(
    {
        $and:[
            {País:{$eq:"Canadá"}},
            {Salario:{$lt: 4000}}
        ]
    }
);




//Borrar usuarios que tienen un salario entre 1000 y 2000 dólares.
db.nuevosUsuarios.deleteMany(
    {
        $and:[
            {Salario:{$gt: 1000}},
            {Salario:{$lt: 2000}}
        ]
    }
);





//Eliminar usuarios que tienen una edad igual a 30 años.
db.nuevosUsuarios.deleteMany(
    {
        Edad:{$eq:30}
    }
);




//Borrar usuarios que tienen una altura superior a 190 centímetros.
db.nuevosUsuarios.deleteMany(
    {
        Estatura:{$gt: 190}
    }
);




db.nuevosUsuarios.find({

}).pretty()//.count();




