import { PrismaClient } from '~/generated/prisma/index.js'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    try {
        const companyId = process.env.COMPANY_ID

        if (!companyId) {
            throw new Error('COMPANY_ID is not defined in .env')
        }

        const result = await prisma.company_frontend_settings.findFirst({
            where: {
                company_id: BigInt(companyId),
            },
            select: {
                settings: true,
            },
        })

        // Return empty object if settings not found
        return result?.settings ?? {}
    } catch (err) {
        console.error(err)
        return {
            error: true,
            message: err.message,
            statusCode: 500,
        }
    }
})
