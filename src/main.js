import { returnMenu } from './components/menu.js';
import { returnFilters } from './components/filters.js';
import { returnSorting } from './components/sorting.js';
import { returnEditTask } from './components/edittask.js';
import { returnTask } from './components/task.js';

const returnBoard = () => (`<section class="board container"></section>`);
const returnTaskBoard = () => (`<div class="board__tasks"></div>`);
const returnLoadMoreButton = () => (`<button class="load-more" type="button">load more</button>`);

const main = document.querySelector(`.main`);
const mainControl = document.querySelector(`.main__control`);


const renderComponent = (component, place) => {
  place.insertAdjacentHTML(`beforeend`, component);
};

renderComponent(returnMenu(), mainControl);
renderComponent(returnFilters(), main);
renderComponent(returnBoard(), main);

const board = document.querySelector(`.board`);
renderComponent(returnSorting(), board);
renderComponent(returnTaskBoard(), board);

const generateTasks = () => {
  const NUMBER_OF_TASKS = 3;
  const tasks = [];
  const taskBoard = document.querySelector(`.board__tasks`);
  renderComponent(returnEditTask(), taskBoard);
  for (let i = 0; i < NUMBER_OF_TASKS; i++) {
    tasks.push(returnTask());
  }
  renderComponent(tasks.join(``), taskBoard);
};

generateTasks();
renderComponent(returnLoadMoreButton(), board);
