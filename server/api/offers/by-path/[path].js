import { PrismaClient } from '~/generated/prisma/index.js'
const prisma = new PrismaClient()
function serializeBigInt(obj) {
    return JSON.parse(JSON.stringify(obj, (key, value) =>
        typeof value === 'bigint' ? value.toString() : value
    ));
}

export default defineEventHandler(async (event) => {
    const { path } = event.context.params
    try {
        const offer = await prisma.offers.findFirst({
            where: { path },
            include: { stores: true },
        })
        if (!offer) {
            return { error: true, message: 'Offer not found', statusCode: 404 }
        }
        return serializeBigInt(offer)
    } catch (err) {
        return {
            error: true,
            message: err.message,
            statusCode: 500,
        }
    }
})
