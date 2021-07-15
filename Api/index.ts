
import * as swagger from 'fastify-swagger';

const app = require('fastify')({
    logger: true,
    ignoreTrailingSlash: true
  })

  app.listen(3000, (err, address) => {
    if (err) throw err
    app.log.info(`server listening on ${address}`)
  });