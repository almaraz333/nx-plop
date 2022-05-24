import { mount } from "@cypress/react";
import { Test2 } from ".";

describe('Test2 test', () => {
  it('successfully gets content', () => {
    mount( <Test2 />);
    cy.contains('Test2');
  });
});
