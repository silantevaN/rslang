import AudiocallGame from '../../../components/pages/games/audiocall/AudiocallGame';

const AudiocallPage = {
  render: async () => {
    const view = `
      <div style="position: absolute; top: 50%; left: 50%; font-size: 64px; transform: translate(-50%, -50%);">
        Audiocall
      </div>
    `;
    return view;
  },
  after_render: async () => {
    // eslint-disable-next-line no-new
    new AudiocallGame();
  },
};

export default AudiocallPage;
