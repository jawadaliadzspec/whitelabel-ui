import { PrismaClient } from '~/generated/prisma/index.js'
const prisma = new PrismaClient()

function serializeBigInt(obj) {
    return JSON.parse(JSON.stringify(obj, (key, value) =>
        typeof value === 'bigint' ? value.toString() : value
    ));
}

export default defineEventHandler(async (event) => {
    // Handle companyId missing BEFORE try/catch
    const companyId = process.env.COMPANY_ID ?? 1
    if (!companyId) {
        return {
            error: true,
            message: 'COMPANY_ID is not defined in .env',
            statusCode: 500,
        }
    }

    try {
        const offers = await prisma.offers.findMany({
            where: {
                company_id: BigInt(companyId), // use BigInt for match
                is_featured: true,
                status: true,
                stores: { // 👈 Only offers whose related store has status true
                    status: 1,
                },
            },
            orderBy: {
                id: 'desc',
            },
            take: 4,
            include: {
                stores: true,
            }
        })

        return serializeBigInt(offers)
    } catch (err) {
        // Return the ACTUAL error
        console.error(err)
        return {
            error: true,
            message: err.message || 'Unknown error',
            statusCode: 500,
            details: err, // for debugging, remove in prod if needed
        }
    }
})
