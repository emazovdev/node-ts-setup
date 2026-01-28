import type { Request, Response } from 'express'
import { prisma } from '../db/prisma.js'
import { createUserService } from '../services/user.service.js'

const userService = createUserService(prisma)

export async function createUser(req: Request, res: Response) {
	const { username } = req.body as { username?: string }

	const user = await userService.create({ username })
	res.status(201).json(user)
}

export async function getUsers(req: Request, res: Response) {
	const users = await userService.getAll()
	res.status(200).json(users)
}
