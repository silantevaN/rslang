import HomePage from './views/pages/HomePage';
import BookPage from './views/pages/BookPage';
import GamesPage from './views/pages/Games/GamesPage';
import AudiocallPage from './views/pages/Games/AudiocallPage';
import SprintPage from './views/pages/Games/SprintPage';
import StatisticsPage from './views/pages/StatisticsPage';
import Utils from './services/Utils';

const routes = {
  '/': HomePage,
  '/book': BookPage,
  '/games': GamesPage,
  '/audiocall': AudiocallPage,
  '/sprint': SprintPage,
  '/statistics': StatisticsPage,
};

const router = async () => {
  const content = document.getElementById('root');

  const request = Utils.parseRequestURL();
  const parsedURL = request.resource ? `/${request.resource}` : '/';

  const page = routes[parsedURL];

  content.innerHTML = await page.render();
  await page.after_render();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
