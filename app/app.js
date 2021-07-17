const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

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

const app = [setupCors, setupParser, setupMorgan].reduce((e, middleware) => middleware(e) , express())

module.exports = app;
