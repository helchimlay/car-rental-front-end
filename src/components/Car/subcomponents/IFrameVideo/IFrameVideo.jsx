import React from 'react';

const IFrameVideo = props => {
  const video = url => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };
  const videoId = video(props.videoURL);
  const iframeMarkup = `//www.youtube.com/embed/${videoId} `;

  return (
    <iframe
      src={iframeMarkup}
      frameBorder='0'
      allowFullScreen
      title='Prezentacja samochodu'
    >
      Twoja przeglądarka nie wspiera iframe!
    </iframe>
  );
};

export default IFrameVideo;
