import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { connect } from 'react-redux';
import { useEffect } from 'react';
// import { dispatch } from 'store/index';
import { useState } from 'react';
// import { AllCompanies } from 'store/action/index';
const CompanySearchable = ({ All_Companies, onInputChange, selectedValue, variant = 'standard' }) => {
  const [params] = useState({ page: 1 });
  // const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    // dispatch(AllCompanies({ params: { ...params, paginate: 'all' }, setLoading: setLoading }));
  }, [params]);

  return (
    <Autocomplete
      selected={selectedValue}
      onChange={onInputChange}
      options={All_Companies}
      sx={{ width: 200 }}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField {...params} style={{ height: '100%' }} label="Search by Company" variant={variant} />}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    All_Companies: state?.AllCompaniesReducers.allcompany
  };
};

export default connect(mapStateToProps)(CompanySearchable);
