import { Body, Controller, Get,Post,Param, Delete, Put } from "@nestjs/common";
import { ProduceService } from "./products.service";
import { Produce } from "@prisma/client";
import { ProduceDto } from "./dto";
@Controller('produce')
export class ProduceController {
  constructor(private produceService: ProduceService) {}

  // get all produce
  @Get()
  getAllProduce() {
    return this.produceService.getAllProduce();
  }

  //get one produce
  @Get(':id')
  async getOneProduce(@Param('id') produceId: String): Promise<Produce> {
    console.log(produceId);

    return this.produceService.getOneProduce({ id: Number(produceId) });
  }

  //update produce
  @Put(":id")
  editProduce(@Param('id') id:string,@Body() data:ProduceDto){
    console.log(data);
    
    return this.produceService.editProduce({
      where:{id:Number(id)},
      data:data
    })
  }



  //add produce
  @Post()
  addProduce(@Body() dto: ProduceDto) {
    console.log({ dto });

    return this.produceService.addProduce(dto);
  }

  //delete produce
  @Delete(":id")
  async deleteProduce(@Param('id') produceId: String): Promise<Produce> {
return this.produceService.deleteProduce({ id: Number(produceId) });

  }
}