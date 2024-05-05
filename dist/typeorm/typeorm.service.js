"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeormService = void 0;
const common_1 = require("@nestjs/common");
let TypeormService = class TypeormService {
    constructor() {
    }
    createTypeOrmOptions() {
        return {
            type: 'postgres',
            host: 'user-prod-us-east-2-1.cluster-cfi5vnucvv3w.us-east-2.rds.amazonaws.com',
            port: 5432,
            username: 'zc-tournaments-main-db-0efa305efb27bd039',
            password: 'kZWGaX3h7VcFReASyFQMkfh5mFS21k',
            database: 'zc-tournaments-main-db-0efa305efb27bd039',
            entities: [__dirname + '/../**/*.entity{.js,.ts}'],
            synchronize: true,
            logging: true
        };
    }
};
exports.TypeormService = TypeormService;
exports.TypeormService = TypeormService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], TypeormService);
//# sourceMappingURL=typeorm.service.js.map