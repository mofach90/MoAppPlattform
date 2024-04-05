import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(src/assets/nikolaj-habib-J9T8mIL5f4M-unsplash.jpg)`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        display: 'flex', 
        flexDirection: 'column', // You can use 'row' if you prefer a horizontal layout
        justifyContent: 'center', // Centers the content vertically
        alignItems: 'center', // Centers the content horizontally
        textAlign: 'center', // Centers the text inside the Typography component
        color: 'white', // Text color, change as needed    
    }}
      
      
        bgcolor={"pink"}
      width={500}
      height={500}
    ></Box>
  );
};

export default Header;
