import { LogService } from '@compartido/core/services/log.service';
import { WindowService } from '@compartido/core/services/window.service';

export const CORE_PROVIDERS: any[] = [LogService, WindowService];

export * from '@compartido/core/services/log.service';
export * from '@compartido/core/services/window.service';
export * from '@compartido/core/services/tokens';
export * from '@compartido/core/services/api.service';
export * from '@compartido/core/services/dispatcher.service';
