import type { Prisma } from '../db/prisma.js'

export type CreateUserInput = {
	username?: string
}

export function createUserService(prisma: Prisma) {
	return {
		async create(input: CreateUserInput) {
			return prisma.user.create({
				data: {
					username: input.username,
				},
			})
		},

		async getAll() {
			return prisma.user.findMany({
				orderBy: {
					createdAt: 'desc',
				},
			})
		},
	}
}
