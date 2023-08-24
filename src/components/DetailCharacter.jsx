import { useParams } from "react-router-dom"
import { useEffect, useState} from "react"
import CardContent  from "@mui/material/CardContent"
import  Typography  from "@mui/material/Typography"
import  CardMedia  from "@mui/material/CardMedia"
import Card from "@mui/material/Card"


export default function DetailCharacter() {
    const { id } = useParams()
    const [character, setCharacter] = useState({})
    
     useEffect(() => {
         fetch (`https://rickandmortyapi.com/api/character/${id}`)
         .then((response) => response.json())
         .then((data) =>{
            setCharacter(data)
          
           })
       },  [id])
    console.log(character)
    console.log(id)
  return (
    <div>
        <Card 
      sx={{ 
        width: 400, 
        margin: "auto", 
        boxShadow:"14px 14px 13px -6px rgba(0,0,0,0.50)",
        }}>
        <CardMedia
          sx={{ height: 400 }}
          image={character.image}
          title={character.name}
          component='div'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            status: {character.status}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
