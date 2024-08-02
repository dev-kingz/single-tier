import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthenticationController {

    @Get()
    getHello(): string {
        return 'Hello from Authentication Controller';
    }
}
