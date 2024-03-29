import './src/styles/reset.scss';
import './src/styles/fonts.scss';
import './src/styles/base.scss';

const div = document.createElement('div');
div.classList.add('loading');
document.body.appendChild(div);

document.body.onload = () => {
  document.body.style.opacity = '1';
  setTimeout(() => {
    div.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(div);
    }, 400);
  }, 400);
};
