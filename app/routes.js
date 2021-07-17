function setupAllRoutes(e) {
    /**
     * @openapi
     * /:
     *   get:
     *     description: Welcome to swagger-jsdoc!
     *     responses:
     *       200:
     *         description: Returns a mysterious string.
     */
    e.get('/', (_req, res) => {
        res.json({ msg: "hello junior" })
    })

    return e
}

module.exports = setupAllRoutes