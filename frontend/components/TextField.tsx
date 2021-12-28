import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { TextField as VaadinTextField } from '@vaadin/text-field';

export const TextField = createComponent(React, 'vaadin-text-field', VaadinTextField, {
  oninput: 'input',
  onchange: 'change',
});
