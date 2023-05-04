import React from 'react';
import YouTube from 'react-youtube';

const YoutubePlayer = () => {
  const videoId = 'v99dsVBE4xQ';

  const playerOptions = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  const playerContainerStyle = {
    marginLeft: '1in',
    marginRight: '1in',
  };

  return (
    <div style={playerContainerStyle}>
      <YouTube videoId={videoId} opts={playerOptions} />
    </div>
  );
};

export default YoutubePlayer;
