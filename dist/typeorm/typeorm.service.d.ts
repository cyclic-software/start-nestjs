import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
export declare class TypeormService implements TypeOrmOptionsFactory {
    constructor();
    createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions>;
}
