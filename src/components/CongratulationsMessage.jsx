import { Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import DealButton from './DealButton';
import { Link } from 'react-router-dom';

const CongratulationMessage = ({ setItemCounters }) => {
  console.log(
    '🚀 ~ file: CongratulationsMessage.jsx:6 ~ CongratulationMessage ~ setItemCounters:',
    setItemCounters
  );
  const [open, setOpen] = useState(false);
  console.log(setItemCounters);

  useEffect(() => {
    setItemCounters({});
  }, [setItemCounters]);

  return (
    <div className="congratulationsMessage-content-wrapper">
      <p className="text-italianno">Thank you for purchase</p>
      <Link to="/">
        <DealButton message="Continue Shopping" />
      </Link>
    </div>
  );
};

export default CongratulationMessage;
