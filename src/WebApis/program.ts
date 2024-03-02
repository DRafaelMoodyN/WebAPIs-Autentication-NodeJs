import express, { Router } from "express"

interface IOptions {
    port?: number,
    router: Router
}

export class Program {

    private readonly _app = express()
    private readonly _port: number = 8080
    private readonly _route: Router

    constructor(params: IOptions) {
        this._port = params.port || 8090
        this._route = params.router
    }

    async start() {
        this._app.use(express.json())
        this._app.use(express.urlencoded({ extended: true }))
        this._app.use(this._route)

        this._app.listen(this._port, () => {
            console.log(`http://localhost:${this._port}`)
        })
    }
}