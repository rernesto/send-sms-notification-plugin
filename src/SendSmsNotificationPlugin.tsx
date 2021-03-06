import React from 'react';
import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import reducers, { namespace } from './states';
import SendSMSButton from "./components/SendSMS/SendSMSButton";
import SendSMSFormContainer from "./components/SendSMS/SendSMSForm.Container";
import {View} from "@twilio/flex-ui";

const PLUGIN_NAME = 'SendSmsNotificationPlugin';

export default class SendSmsNotificationPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   * @param manager { Flex.Manager }
   */
  init(flex: typeof Flex, manager: Flex.Manager) {
    this.registerReducers(manager);

    const options: Flex.ContentFragmentProps = { sortOrder: -1 };

    flex.SideNav.Content.add(
        <SendSMSButton key="send-sms-button" />
    );
    flex.ViewCollection.Content.add(
        <View name="send-sms-form" key="send-sms-form">
          <SendSMSFormContainer  />
        </View>
    );
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  private registerReducers(manager: Flex.Manager) {
    if (!manager.store.addReducer) {
      // tslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${Flex.VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
