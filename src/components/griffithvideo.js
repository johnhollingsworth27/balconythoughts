import React from 'react';
import Player from 'griffith';

const GriffithPlayer = () => {
  const sources = {
    hd: {
      play_url: 'https://www.youtube.com/watch?v=v99dsVBE4xQ',
    },
    sd: {
      play_url: 'https://www.youtube.com/watch?v=v99dsVBE4xQ',
    },
  };

  const playerContainerStyle = {
    marginLeft: '1in',
    marginRight: '1in',
  };

  return (
    <div style={playerContainerStyle}>
      <Player sources={sources} />
    </div>
  );
};

export default GriffithPlayer;
