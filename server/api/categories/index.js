import { PrismaClient } from '~/generated/prisma/index.js'
const prisma = new PrismaClient()

function serializeBigInt(obj) {
    return JSON.parse(JSON.stringify(obj, (key, value) =>
        typeof value === 'bigint' ? value.toString() : value
    ))
}

export default defineEventHandler(async (event) => {
    try {
        const companyId = process.env.COMPANY_ID ?? 1
        if (!companyId) {
            return {
                error: true,
                message: 'COMPANY_ID is not defined in .env',
                statusCode: 500,
            }
        }
        const categories = await prisma.categories.findMany({
            where: {
                company_id: BigInt(companyId),
                status: true,
                offers: { some: { status: true } }, // << Only categories with at least one offer
            },
            orderBy: { name: 'asc' },
            select: {
                id: true,
                name: true,
                // Add more fields here if needed
            },
        })

        return serializeBigInt(categories)
    } catch (error) {
        console.error(error)
        return {
            error: true,
            message: error.message,
            statusCode: 500,
        }
    }
})
