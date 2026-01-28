import { env } from './config/env.js'
import express from 'express'

async function bootstrap() {
	const app = express()

	app.use(express.json())

	app.get('/health', (_req, res) => {
		res.status(200).json({ ok: true })
	})

	app.listen(env.port, () => {
		console.log(`Server started on http://localhost:${env.port}`)
	})
}

bootstrap().catch(err => {
	console.error('Failed to start server', err)
	process.exit(1)
})
