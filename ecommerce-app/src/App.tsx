import React from 'react';
import './styles/global.scss'
import { Typography } from './palette';

function App() {
  return (
    <div>
      <Typography variant='s1' weight='regular'>Texto</Typography>
      <Typography variant='s2' weight='extraBold'>Texto</Typography>
      <Typography variant='s3' weight='medium'>Texto</Typography>
      <Typography variant='s4' weight='regular'>Texto</Typography>
      <Typography variant='s5' weight='semiBold'>Texto</Typography>
      <Typography variant='s6' weight='regular'>Texto</Typography>
    </div>
  );
}

export default App;
