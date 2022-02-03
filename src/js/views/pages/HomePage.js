const HomePage = {
  render: async () => {
    const view = `
      <div style="position: absolute; top: 50%; left: 50%; font-size: 64px; transform: translate(-50%, -50%);">Home</div>
    `;
    return view;
  },
  after_render: async () => {

  },
};

export default HomePage;
