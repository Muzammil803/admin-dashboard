import React from 'react';
import { Grid, InputLabel, OutlinedInput, Stack } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
const ThemeInput = (props) => {
  let { name, type, placeholder, id, errorText, error ,disabled } = props;

  return (
    <Grid item xs={12}>
      <Stack spacing={1}>
        <InputLabel htmlFor={id}>{name}</InputLabel>
        <OutlinedInput
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          helperText="There has been an error"
          fullWidth
          disabled={disabled}

          err
          {...props}
        />
        {error ? (
          <FormHelperText style={{ margin: '0px 3%', color: 'red', fontSize: 10 }}>{errorText}</FormHelperText>
        ) : (
          <div></div> // Render nothing when error is false
        )}
      </Stack>
    </Grid>
  );
};

ThemeInput.defaultProps = {
  errorText: '',
  error: false
};
export default ThemeInput;
