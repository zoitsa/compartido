import { AppService } from '@compartido/nativescript/core/services/app.service';
import { TNSWindowPlatformService } from '@compartido/nativescript/core/services/tns-window.service';

export const PROVIDERS: any[] = [AppService, TNSWindowPlatformService];

export * from '@compartido/nativescript/core/services/app.service';
