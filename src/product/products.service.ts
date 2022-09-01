import { Injectable } from "@nestjs/common";
import { Produce ,Prisma} from "@prisma/client";

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProduceService {
  constructor(private readonly prismaService: PrismaService) {}

  getAllProduce() {
    return this.prismaService.produce.findMany();
  }

  async getOneProduce(
    produceId: Prisma.ProduceWhereUniqueInput,
  ): Promise<Produce> {
    const produce = await this.prismaService.produce.findUnique({
      where: produceId,
    });
    return produce;
  }


  //add produce
  async addProduce(data) {
    const produce = await this.prismaService.produce.create({ data: data });
    return produce;
  }

  //edit produce
async editProduce(params:{
  where:Prisma.ProduceWhereUniqueInput,
  data:Prisma.ProduceUpdateInput
}):Promise<Produce>{
  const {where,data}=params
return this.prismaService.produce.update({data,where})
}



  deleteProduce(produceId: Prisma.ProduceWhereUniqueInput): Promise<Produce> {
    return this.prismaService.produce.delete({
      where: produceId,
    });
  }
}