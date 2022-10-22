import React from 'react';
import DownloadImage from '../assets/download.svg';
import Pdf from '../../static/paramasivam_resume.pdf';

const Download = () => {
  const float = {
    position: 'fixed',
    width: '60px',
    height: '60px',
    bottom: '40px',
    right: '40px',
    backgroundColor: '#38b2ac',
    color: '#FFF',
    borderRadius: '50px',
    textAlign: 'center',
    boxShadow: '2px 2px 3px #999',
    cursor: 'pointer',
  };

  const image = {
    position: 'relative',
    left: '0.7em',
    top: '0.4em',
  };
  return (
    <a href={Pdf} target="_blank" rel="noreferrer" style={float}>
      <DownloadImage style={image} />
    </a>
  );
};

export default Download;
