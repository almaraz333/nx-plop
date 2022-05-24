import { mount } from "@cypress/react";
import { Test1 } from ".";

describe('Test1 test', () => {
  it('successfully gets content', () => {
    mount( <Test1 />);
    cy.contains('Test1');
  });
});
