import Highway from '@dogstudio/highway';
import Fade from './transiton';

const H = new Highway.Core({
  transitions: {
    default: Fade
  }
});
