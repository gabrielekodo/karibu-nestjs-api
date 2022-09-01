import { PrismaClient } from "@prisma/client";


export class PrismaService extends PrismaClient{
    constructor(){
        super({
          datasources: {
            db: {
              url: 'mysql://gabriel:Gabriel2022@@localhost:3306/karibudb',
            },
          },
        });
    }
}