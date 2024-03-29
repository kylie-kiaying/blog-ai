import { PrismaClient } from '@prisma/client';

let prismaInit: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prismaInit = new PrismaClient();
} else {
  if (!(global as any).prism) {
    (global as any).prism = new PrismaClient();
  }
  prismaInit = (global as any).prism;
}

export const prisma = prismaInit;