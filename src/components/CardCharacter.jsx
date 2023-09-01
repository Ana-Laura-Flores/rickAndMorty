import * as React from 'react';

import { Typography, CardMedia, CardContent, Card } from '@mui/material';
import { Link } from "react-router-dom"

export default function CardCharacter({name, status, id, image}) {
  return (
    <Link to={`/detailCharacter/${id}`} style={{textDecoration: "none"}}>
      <Card 
      sx={{ 
        width: 250, 
        margin: "10px 0", 
        boxShadow:"14px 14px 13px -6px rgba(0,0,0,0.50)" 
        }}>
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
      </Card>
    </Link>
  );
}
