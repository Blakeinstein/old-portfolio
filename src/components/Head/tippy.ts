import tippy, {animateFill, delegate, roundArrow} from 'tippy.js';

tippy('[main-tooltip]', {
  theme: 'space',
  appendTo: () => document.body,
  allowHTML: true,
  hideOnClick: false,
  trigger: 'mouseenter',
  placement: 'auto',
  animateFill: true,
  plugins: [animateFill],
});

delegate('#main', {
  target: '[emotion-tool-tip]',
  appendTo: () => document.body,
  theme: 'emotion',
  allowHTML: true,
  arrow: roundArrow,
  placement: 'auto',
  interactive: true,
})