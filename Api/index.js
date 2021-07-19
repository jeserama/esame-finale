"use strict";
exports.__esModule = true;
var fastify_1 = require("fastify");
var swagger = require("fastify-swagger");
var app = fastify_1["default"]({
    logger: true,
    ignoreTrailingSlash: true
});
app.register(swagger["default"], {
    routePrefix: '/documentation',
    swagger: {
        info: {
            title: 'Esame finale Touring Club',
            description: 'Documentazione API per gestione Touring club',
            version: '0.1.0'
        },
        externalDocs: {
            url: 'https://www.tecnicosuperiorekennedy.it',
            description: 'ITS'
        },
        host: 'localhost:5000',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json']
    },
    exposeRoute: true
});
app.get("/localita", { schema: {
        description: 'get lista di tutti località',
        body: {},
        response: {
            200: {
                description: 'Successful response',
                type: 'object',
                properties: {
                    parks: {
                        type: 'array',
                        description: 'list località',
                        items: {
                            type: 'object',
                            properties: {
                                id: {
                                    type: 'integer',
                                    description: 'park id'
                                },
                                luogo: {
                                    type: 'string',
                                    description: 'the park name'
                                },
                                attrazione: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            nome: {
                                                type: 'string',
                                                description: 'nome del parco'
                                            },
                                            tipi: {
                                                type: 'string',
                                                description: 'tipo del attrazione'
                                            },
                                            prezzo: {
                                                type: 'string',
                                                description: 'prezzo'
                                            },
                                            num_entrate: {
                                                type: 'integer',
                                                description: 'numero persone entrate'
                                            },
                                            num_uscite: {
                                                type: 'integer',
                                                description: 'numero persone uscite'
                                            },
                                            num_presenti: {
                                                type: 'integer',
                                                description: 'numero persone presenti'
                                            },
                                            presenza_media: {
                                                type: 'integer',
                                                description: 'presenza_media'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            401: {
                description: 'Unauthorized',
                type: 'object',
                properties: {
                    errormessage: { type: 'string',
                        value: 'need authentification' }
                }
            }
        },
        security: [
            {
                "apiKey": []
            }
        ]
    } }, function (request, reply) {
});
app.get("/localita/:id", {
    schema: {
        description: 'get un singolo località',
        params: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    description: 'id ',
                    required: ['id']
                }
            }
        },
        response: {
            200: {
                description: 'Successful response',
                type: 'object',
                properties: {
                    nome: {
                        type: 'string',
                        description: 'nome del parco'
                    },
                    tipi: {
                        type: 'string',
                        description: 'tipo del attrazione'
                    },
                    prezzo: {
                        type: 'string',
                        description: 'prezzo'
                    },
                    num_entrate: {
                        type: 'integer',
                        description: 'numero persone entrate'
                    },
                    num_uscite: {
                        type: 'integer',
                        description: 'numero persone uscite'
                    },
                    num_presenti: {
                        type: 'integer',
                        description: 'numero persone presenti'
                    },
                    presenza_media: {
                        type: 'integer',
                        description: 'presenza_media'
                    }
                }
            },
            401: {
                description: 'Ressource not found',
                type: 'object',
                properties: {
                    errormessage: { type: 'string',
                        value: 'need authentification' }
                }
            },
            503: {
                description: 'The server was unavailable',
                type: 'object',
                properties: {
                    errormessage: { type: 'string',
                        value: 'server unavaible contact the developer' }
                }
            }
        },
        security: [
            {
                "apiKey": []
            }
        ]
    }
}, function (request, reply) {
});
app.post("/Parco/", {
    schema: {
        description: ' Per aggiungere un nuovo parco',
        params: {
            type: "object",
            properties: {}
        },
        body: {
            type: 'object',
            properties: {
                nome: {
                    type: 'string',
                    description: 'nome del parco'
                },
                tipi: {
                    type: 'string',
                    description: 'tipo del attrazione'
                },
                prezzo: {
                    type: 'string',
                    description: 'prezzo'
                },
                num_entrate: {
                    type: 'integer',
                    description: 'numero persone entrate'
                },
                num_uscite: {
                    type: 'integer',
                    description: 'numero persone uscite'
                },
                num_presenti: {
                    type: 'integer',
                    description: 'numero persone presenti'
                },
                presenza_media: {
                    type: 'integer',
                    description: 'presenza_media'
                }
            }
        },
        response: {
            201: {
                description: 'A new resource was successfully created',
                type: 'object',
                properties: {
                    res: {
                        type: 'string',
                        status: 'integer',
                        description: "1 se aggiunto altrimenti 0"
                    }
                }
            }
        },
        security: [
            {
                "apiKey": []
            }
        ]
    }
}, function (request, reply) {
});
app.put("/localita/:id", {
    schema: {
        description: 'Update a data of a parks',
        params: {
            type: 'object',
            properties: {
                id: {
                    type: 'string'
                }
            }
        },
        body: {
            type: 'object',
            properties: {
                nome: {
                    type: 'string',
                    description: 'nome del parco'
                },
                tipi: {
                    type: 'string',
                    description: 'tipo del attrazione'
                },
                prezzo: {
                    type: 'string',
                    description: 'prezzo'
                },
                num_entrate: {
                    type: 'integer',
                    description: 'numero persone entrate'
                },
                num_uscite: {
                    type: 'integer',
                    description: 'numero persone uscite'
                },
                num_presenti: {
                    type: 'integer',
                    description: 'numero persone presenti'
                },
                presenza_media: {
                    type: 'integer',
                    description: 'presenza_media'
                }
            }
        },
        response: {
            202: {
                description: ' The request has been accepted for processing',
                type: 'object',
                properties: {
                    res: {
                        type: 'string',
                        status: 'integer',
                        description: "1 se aggiunto altrimenti 0"
                    }
                }
            }
        },
        security: [
            {
                "apiKey": []
            }
        ]
    }
}, function (request, reply) {
});
// CHIAMATA DELETE PER ELIMINARE I DATI
app["delete"]("/localita/:id", {
    schema: {
        params: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    description: "###Inserire descrizione chiamata POST (Ex: 'Inserire Nome dell'utente da eliminare')"
                }
            }
        }
    }
}, function (req, reply) {
    reply
        .code(200) // => IL CODICE CHE VIENE TORNATO
        .send({
        message: "###User deleted succesfully!"
    });
});
app.listen(3000, function (err, address) {
    if (err)
        throw err;
    app.log.info("server listening on " + address);
});
