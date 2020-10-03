import React from 'react';

import Typography from '@material-ui/core/Typography';

import CustomButton from '../../components/custom-button/custom-button.component';

import { useMutation } from '@apollo/client';
import { RESEND_CONFIRMATION } from '../../apollo/server/mutations';

const WaitingPage = () => {
  const [resend, { data, loading }] = useMutation(
    RESEND_CONFIRMATION,
  );
  console.log(data, loading);
  return (
    <div>
      <Typography variant="h4" color="secondary">
        You will recieve a verification email
      </Typography>

      <CustomButton
        type="submit"
        variant="contained"
        onClick={() => {
          resend();
        }}
      >
        Resend
      </CustomButton>
    </div>
  );
};

export default WaitingPage;
