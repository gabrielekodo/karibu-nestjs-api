import { PrismaClient } from "@prisma/client";


export class PrismaService extends PrismaClient{
    constructor(){
        super({
          datasources: {
            db: {
              url: 'postgresql://qagvrkoprippwf:70c16a1d3a502253d37e9f29f9f17dc3c9187694e1e23c8b2f047af7216fd478@ec2-44-197-128-108.compute-1.amazonaws.com:5432/d7jr1448c3pumd'

            },
          },
        });
    }
}