import { PrismaClient } from '~/generated/prisma/index.js'
const prisma = new PrismaClient()

function serializeBigInt(obj) {
    return JSON.parse(JSON.stringify(obj, (key, value) =>
        typeof value === 'bigint' ? value.toString() : value
    ));
}

export default defineEventHandler(async (event) => {
    try {
        const categories = await prisma.categories.findMany({
            where: {
                status: true, // <-- change to 'true' if it's Boolean
            },
            select: {
                id: true,
                name: true,
                // image: true,
                _count: {
                    select: { offers: true }
                }
            },
            orderBy: {
                name: 'asc'
            },
        })
        return serializeBigInt(categories)
    } catch (err) {
        return {
            error: true,
            message: err.message,
            statusCode: 500,
        }
    }
})
