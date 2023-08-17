import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardCharacter({name, status, species, gender,  image}) {
  return (
    <Card sx={{ width: 250, margin: "10px 0" }}>
      <CardMedia
        sx={{ height: 250 }}
        image={image}
        title={name}

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          status: {status}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}