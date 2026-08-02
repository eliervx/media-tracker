import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    private readonly logger = new Logger('HTTP');

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        const { method, originalUrl } = request;
        var username = '';
        if(request.user){
            username = request.user.username;
        }
        const now = Date.now();

        return next.handle().pipe(
            tap(() => {
                const response = context.switchToHttp().getResponse();
                const { statusCode } = response;
                const delay = Date.now() - now;

                // Log automatique : METHODE /URL CODE_STATUS - TEMPS_EXECUTIONms
                this.logger.log(
                    `${method} ${originalUrl} ${statusCode} - ${delay}ms [${username}]`,
                );
            }),
        );
    }
}