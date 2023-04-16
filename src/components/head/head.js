import React from 'react';
import { Helmet } from 'react-helmet';
import './head.css';

const Head = () => {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="generator" content="Mobirise v5.7.0, mobirise.com" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
      <link rel="shortcut icon" href="%PUBLIC_URL%/assets/images/mbr-84x119.png" type="image/x-icon" />
      <meta name="description" content="" />

      <title>Journal</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i&display=swap"
      />
      <link rel="preload" as="style" href="%PUBLIC_URL%/assets/mobirise/css/mbr-additional.css" />
      <link rel="stylesheet" href="%PUBLIC_URL%/assets/mobirise/css/mbr-additional.css" type="text/css" />
    </Helmet>
  );
};

export default Head;
