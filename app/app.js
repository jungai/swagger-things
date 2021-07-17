const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const setupAllRoutes = require('./routes')



function setupCors(e) {
  return e.use(cors())
}

function setupMorgan(e) {
  return e.use(morgan('tiny'))
}

function setupParser(e) {
  return e.use(express.json()).use(express.urlencoded({
    extended: true
  }))
}

function setupRoutes(e) {
  return setupAllRoutes(e)
}

function setupSwaggerUi(e) {
  const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Swagger Things',
        version: '1.0.0',
      },
    },
    apis: ['./**/*.js'], // files containing annotations as above
  };

  return e.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swaggerOptions)));
}

const app = [setupCors, setupParser, setupMorgan, setupRoutes, setupSwaggerUi].reduce((e, middleware) => middleware(e) , express())

module.exports = app;
