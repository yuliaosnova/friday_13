import { Injectable } from '@nestjs/common';
import { CreateDealDto } from './dto/create-deal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Deal } from './entities/deal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DealsService {
  constructor(
    @InjectRepository(Deal)
    private readonly dealsRepository: Repository<Deal>,
  ) {}

  async create(createDealDto: CreateDealDto) {
    const newDeal = {
      title: createDealDto.title,
      price: createDealDto.price,
      tiket: createDealDto.tiket,
      yield: createDealDto.yield,
      days: createDealDto.days,
      sold: createDealDto.sold,
      image: createDealDto.image,
    };
    return await this.dealsRepository.save(newDeal);
  }

  async findAll() {
    return await this.dealsRepository.find();
  }
}
