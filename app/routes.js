const hello = require('./controllers/hello')

function setupAllRoutes(e) {
		/**
		 * @openapi
		 * /:
		 *   get:
		 *     description: hello api
		 *     responses:
		 *       200:
		 *         description: Returns a obj msg string.
		 */
    e.get('/', hello)

    return e
}

module.exports = setupAllRoutes