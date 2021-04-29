import React from 'react';

import {Actions, SideLink} from "@twilio/flex-ui";

// It is recommended to keep components stateless and use redux for managing states
const SendSMSButton = ({activeView}: any) => {


    function navigate() {
        Actions.invokeAction('NavigateToView', {viewName: 'send-sms-form'}).then(r => {});
    }

    return (
            <SideLink
                showLabel={true}
                icon="Sms"
                iconActive="SmsBold"
                isActive={activeView === 'send-sms-form'}
                onClick={navigate}
            > Send SMS</SideLink>
    );
};

export default SendSMSButton;