import React, { useState } from 'react';
import { Grid, InputLabel, OutlinedInput, InputAdornment, Stack } from '@mui/material';
import { Eye, EyeSlash } from 'iconsax-react';
import IconButton from 'components/@extended/IconButton';
import FormHelperText from '@mui/material/FormHelperText';

const PasswordInput = (props) => {
  let { name, placeholder, id, errorText, error } = props;

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Grid item xs={12}>
      <Stack spacing={1}>
        <InputLabel htmlFor={id}>{name}</InputLabel>
        <OutlinedInput
          {...props}
          fullWidth
          id={id}
          type={showPassword ? 'text' : 'password'}
          name={name}
          placeholder={placeholder}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                error={error}
                color="secondary"
              >
                {showPassword ? <Eye /> : <EyeSlash />}
              </IconButton>
            </InputAdornment>
          }
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
PasswordInput.defaultProps = {
  errorText: '',
  error: false
};
export default PasswordInput;
