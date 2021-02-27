const express = require('express');
const cors = require('cors')


class Server {
   constructor() {
      this.app = express();
      this.port = process.env.PORT;
      this.userRoute = '/api/users';

      //Middlewares
      this.middlewares();

      //rutas de mi app
      this.routes();

   }

   middlewares() {

      //CORS
      this.app.use( cors() );

      //Lectura y parseo del body

      this.app.use( express.json() );

      //Direcctorio publico
      this.app.use( express.static('public') );
   }

   routes() {

      this.app.use( this.userRoute, require('../routes/user.routes'))

   }

   listenPort() {
      this.app.listen( this.port, () => {
         console.log('servidor corriendo en port:', this.port )
      });
   }



}




module.exports = Server;