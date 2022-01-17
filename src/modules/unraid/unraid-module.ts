import { mix } from 'ts-mixer';
import { Executor } from '../../instance/executor';
import { Unraid } from '../../instance/unraid';
import {
  UnraidModuleCaseModelExtension,
  UnraidModuleIdentConfigExtension,
  UnraidModuleNotificationExtension,
  UnraidModuleUserScriptsExtension,
} from './extensions';

// required for mixins
export interface UnraidModule<ExecutorConfig, Ex extends Executor<ExecutorConfig>>
  extends UnraidModuleNotificationExtension<ExecutorConfig, Ex>,
    UnraidModuleIdentConfigExtension<ExecutorConfig, Ex>,
    UnraidModuleUserScriptsExtension<ExecutorConfig, Ex>,
    UnraidModuleCaseModelExtension<ExecutorConfig, Ex> {
  instance: Unraid<ExecutorConfig, Ex>;
}

@mix(
  UnraidModuleCaseModelExtension,
  UnraidModuleNotificationExtension,
  UnraidModuleIdentConfigExtension,
  UnraidModuleUserScriptsExtension
)
export class UnraidModule<ExecutorConfig, Ex extends Executor<ExecutorConfig>> {
  instance: Unraid<ExecutorConfig, Ex>;

  constructor(instance: Unraid<ExecutorConfig, Ex>) {
    this.instance = instance;
  }
}
