import '../../../src/blur-hash';
import './style.css';
import './assets/fonts/helvetica-neue.css';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github.css';
import { debounce } from 'throttle-debounce';
hljs.registerLanguage('javascript', javascript);
hljs.initHighlightingOnLoad();

const spinner = document.getElementById('spinner');
const wrapper = document.getElementById('main');

window.ciResponsive = new window.CIResponsive({
  token: 'demo',
  baseUrl: 'https://cloudimage.public.airstore.io/demo/',
  params: 'ci_info=1&org_if_sml=1&version=16.04.2020',
  lazyLoadOffset: 100,
  lazyLoading: true,
  imgLoadingAnimation: true,
  placeholderBackground: '#e1e1e1',
  exactSize: false
});

setTimeout(() => {
  window.ciResponsive.process();
}, 1000)
setTimeout(() => {
  window.ciResponsive.process();
}, 2000)
setTimeout(() => {
  window.ciResponsive.process();
}, 4000)

window.lazySizes.init();

wrapper.classList.add('active');
spinner.style.display = 'none';

/*
*  logic for image containers;
*/

const containerBox = document.querySelectorAll('.container-width-box');
const devicePixelRatio = document.querySelector('#device-pixel-ratio span');
const setBoxSizes = () => {
  [].slice.call(containerBox).forEach(box => {
    box.querySelector('span').innerText = box.offsetWidth;
  });
}

setBoxSizes();

devicePixelRatio.innerText = window.devicePixelRatio.toFixed(1);
window.onresize = debounce(400, setBoxSizes);