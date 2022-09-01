import { Module } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProduceController } from "./products.controller";
import { ProduceService } from "./products.service";

@Module({
    controllers:[ProduceController],
    providers:[ProduceService,PrismaService]
})
export class ProduceModule{

}