import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { Button as VaadinButton } from '@vaadin/button';

export const Button = createComponent(React, 'vaadin-button', VaadinButton, {
  onClick: 'click',
});
