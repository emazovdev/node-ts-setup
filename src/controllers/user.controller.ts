import type { Request, Response } from 'express'
import { prisma } from '../db/prisma.js'

export async function createUser(req: Request, res: Response) {
	const { username } = req.body

	const user = await prisma.user.create({
		data: {
			username,
		},
	})

	res.status(201).json(user)
}

export async function getUsers(req: Request, res: Response) {
	const users = await prisma.user.findMany()

	res.status(200).json(users)
}
