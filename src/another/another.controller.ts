import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { AnotherService } from './another.service.js';
@Controller('another')
export class AnotherController {
    constructor(private anotherService: AnotherService) {}
    @Get('another')
    anotherRoute() {
       return this.anotherService.anotherRoute();
    }
}
