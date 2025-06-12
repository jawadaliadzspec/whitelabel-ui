import { PrismaClient } from '~/generated/prisma/index.js'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    try {
        return await prisma.settings.findMany()
    } catch (err) {
        console.log(err)
    }
})