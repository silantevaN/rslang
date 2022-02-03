const GamesPage = {
  render: async () => {
    const view = `
      <div style="position: absolute; top: 50%; left: 50%; font-size: 64px; transform: translate(-50%, -50%);">
        Games
      </div>
      <div style="position: absolute; top: 60%; left: 50%; font-size: 36px; transform: translate(-50%, -50%);">
        <a href="#audiocall">
          audiocall
        </a>
        <a href="#sprint">
          sprint
        </a>
      </div>
    `;
    return view;
  },
  after_render: async () => {

  },
};

export default GamesPage;
