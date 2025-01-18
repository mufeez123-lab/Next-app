import { Box, Container, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';

export default function Branding() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); 

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: isSmallScreen ? '#e0f7fa' : '#ffebee', 
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          gap: 2,
          marginLeft: '10vh',
        }}
      >
        <Typography
          variant={isSmallScreen ? 'h4' : 'h2'}
          sx={{
            color: isSmallScreen ? '#00796b' : '#b71c1c',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: 2,
            fontSize: '30px',
          }}
        >
          Mufeez
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Search"
          size="small"
          sx={{
            width: isSmallScreen ? '100%' : '900px',
          }}
        />
      </Box>
      <Box
  sx={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
    margin: 2,
  }}
>
  <Box
    sx={{
      flex: 1,
      width: '155vh',
      height: '70vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isSmallScreen ? '#ffffff' : '#f5f5f5',
      borderRadius: 2,
      boxShadow: 3,
      margin: 2,
    }}
  >
    <Typography
      variant={isSmallScreen ? 'body1' : 'h4'}
      sx={{
        color: '#333',
        padding: 3,
        textAlign: 'center',
      }}
    >
      Content Box
    </Typography>
  </Box>
  <Box
    sx={{
      width: '50vh',
      height: '70vh',
      display: isSmallScreen ? 'none' : 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e0f7fa',
      borderRadius: 2,
      boxShadow: 3,
      margin: 2,
    }}
  >
    <Typography
      
      sx={{
        color: '#00796b',
        padding: 3,
        textAlign: 'center',
      }}
    >
      Right-Side Box
    </Typography>
  </Box>
</Box>

      <Typography
        variant="subtitle1"
        sx={{
          marginTop: 2,
          color: isSmallScreen ? '#004d40' : '#880e4f', 
          fontStyle: 'italic',
          fontSize: '20px',
        }}
      >
        {isSmallScreen ? '' : ''}
      </Typography>
    </Box>
  );
}
