import '@testing-library/jest-dom';
import { render, screen, act, waitFor } from '@testing-library/react';

global.IS_REACT_ACT_ENVIRONMENT = true;

global.render = render;
global.screen = screen;
global.act = act;
global.waitFor = waitFor;

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});