import React from 'react';
import { Container, Grid, Typography, Link, Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f8f8f8',
        padding: '10px 0',
        // position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        borderTop: '1px solid #ddd',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a leading food website providing the best recipes, food articles, and much more.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" variant="body2" display="block" underline="hover">
              Home
            </Link>
            <Link href="#" variant="body2" display="block" underline="hover">
              Recipes
            </Link>
            <Link href="#" variant="body2" display="block" underline="hover">
              Blog
            </Link>
            <Link href="#" variant="body2" display="block" underline="hover">
              Contact Us
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton aria-label="Facebook" href="#">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="Instagram" href="#">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="Twitter" href="#">
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="YouTube" href="#">
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" display="block">
              123 Food Street, City, Country
            </Typography>
            <Typography variant="body2" display="block">
              Email: info@foodwebsite.com
            </Typography>
            <Typography variant="body2" display="block">
              Phone: (123) 456-7890
            </Typography>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            &copy; {new Date().getFullYear()} Food Website. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
