import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
    a = 1;
    test() {
        return ++this.a;
    }
}
