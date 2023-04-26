import React from 'react';
import Player from 'griffith';

const GriffithPlayer = () => {
  const sources = {
    hd: {
      play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
    },
    sd: {
      play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_sd.mp4',
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
