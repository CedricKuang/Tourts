import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import * as React from 'react';
import FormBackground from './FormBackground';

const FormContainer = React.forwardRef((props, ref) => {
  const { children, maxWidth, marginTop, marginBottom } = props;

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
      ref={ref}
    >
      <Container maxWidth={maxWidth ? maxWidth : 'sm'}>
        <Box
          marginTop={marginTop ? marginTop : 10}
          marginBottom={marginBottom ? marginBottom : 10}
        >
          <FormBackground
            background='light'
            justify='center'
            sx={{ py: { xs: 4, md: 8 }, px: { xs: 3, md: 6 }, height: 1 }}
          >
            {children}
          </FormBackground>
        </Box>
      </Container>
    </Box>
  );
});

FormContainer.propTypes = {
  children: PropTypes.node,
};

export default FormContainer;
