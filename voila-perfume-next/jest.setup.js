import '@testing-library/jest-dom';
import { render, screen, act, waitFor } from '@testing-library/react';

global.IS_REACT_ACT_ENVIRONMENT = true;

global.render = render;
global.screen = screen;
global.act = act;
global.waitFor = waitFor;