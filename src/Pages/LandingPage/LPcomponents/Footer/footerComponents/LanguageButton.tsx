import LanguageIcon from '@mui/icons-material/Language';
import {
  Avatar,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const menuItemStyles = {
  color: 'black',
  '&.Mui-selected': {
    backgroundColor: 'rgb(190,255,255)',
    '&:hover': {
      backgroundColor: 'rgb(190,255,255)',
    },
  },
};

const inputItemStyles = {
  color: 'white',
  '&.Mui-focused': {
    transform: 'translate(-20px, -14px) scale(0.75) rotate(1turn)',
    color: 'inherit',
  },
  '&.MuiInputLabel-shrink': {
    color: 'inherit',
    '&:not(.Mui-focused)': {
      transform: 'translate(-20px, -14px) scale(0.75) rotate(1turn)',
      color: 'inherit',
    },
  },
};

const LanguageButton = () => {
  const [language, setLanguage] = useState<string>('');
  const { i18n } = useTranslation();
  const selectStyles = {
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiSelect-select': {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      '& .MuiSvgIcon-root': {
        color: 'yellow',
      },
    },
    '& .MuiSvgIcon-root': {
      color: language ? 'transparent' : 'rgb(90,255,255)',
      fontSize: '30px',
    },
  };

  const handleChange = (event: any) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };
  return (
    <Box
      width={165}
      border={'1px solid'}
      height={40}
      mr={2}
      ml={2}
      borderRadius={10}
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
    >
      <LanguageIcon color="inherit" sx={{ ml: 1 }} />
      <FormControl fullWidth>
        <InputLabel id="Language" sx={inputItemStyles}>
          Language
        </InputLabel>
        <Select
          value={language}
          onChange={handleChange}
          sx={selectStyles}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: 'rgb(90,255,255)',
                width: 80,
                borderRadius: 5,
              },
            },
            anchorOrigin: {
              vertical: 0,
              horizontal: 210,
            },
          }}
        >
          <MenuItem sx={menuItemStyles} value={'de'}>
            Deutsch
            <Avatar
              sx={{
                ml: 2,
                width: 20,
                height: 18,
              }}
              src="/assets/Flag_of_Germany.png"
            />
          </MenuItem>
          <MenuItem sx={menuItemStyles} value={'en'}>
            English
            <Avatar
              sx={{
                ml: 2.8,
                width: 20,
                height: 18,
              }}
              src="/assets/Flag_of_the_United_Kingdom.png"
            />
          </MenuItem>
          <MenuItem sx={menuItemStyles} value={'ar'}>
            Arabic
            <Avatar
              sx={{
                ml: 3.7,
                width: 22,
                height: 20,
              }}
              src="/assets/Flag_of_Saudi_Arabia.svg.png"
            />
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguageButton;
