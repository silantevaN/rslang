import SprintGame from '../../../components/pages/games/sprint/SprintGame';

const SprintPage = {
  render: async () => {
    const view = `
      <div style="position: absolute; top: 50%; left: 50%; font-size: 64px; transform: translate(-50%, -50%);">
        Sprint
      </div>
    `;
    return view;
  },
  after_render: async () => {
    // eslint-disable-next-line no-new
    new SprintGame();
  },
};

export default SprintPage;
