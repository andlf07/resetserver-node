const { response, request } = require('express');


const usersGet = (req, res = response ) => {

   const query = req.query;

   res.json({
      msg: 'get Api - Controlador',
      query
   });
}


const usersPost = (req, res = response ) => {

   const { nombre, edad } = req.body;

   res.json({
      msg: 'post API - controller',
      nombre,
      edad
   });
}

const usersPut = (req, res = response ) => {

   const id = req.params.id;

   res.json({
      msg: 'put Api - controller',
      id
   });
}

const usersPatch = (req, res = response ) => {


   res.json({
      msg: 'patch Api - controller'
   });
}

const usersDelete = (req, res = response ) => {
   res.json({
      msg: 'delete Api - controller'
   });
}




module.exports = {
   usersGet,
   usersPost,
   usersPut,
   usersPatch,
   usersDelete
}