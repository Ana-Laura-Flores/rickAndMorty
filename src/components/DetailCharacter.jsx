import { useParams } from "react-router-dom"
import { useEffect} from "react"
import CardContent  from "@mui/material/CardContent"
import  Typography  from "@mui/material/Typography"
import  CardMedia  from "@mui/material/CardMedia"
import { Button } from "@mui/material"
import Card from "@mui/material/Card"
import { Link } from "react-router-dom"
import useCharacter from "./useCharacter"


export default function DetailCharacter() {
    const { id } = useParams()
    //  { data: [...], getData: function }
    const { getData, data } = useCharacter([])
    //const detailCharacter = useCharacter([])
    // si no desestructuro tengo que llamar a la funcion detailCharacter.getData y la data con detailCharacter.data

    
    
     useEffect(() => {
        getData(`https://rickandmortyapi.com/api/character/${id}`)
       },  [id])
   
  return (
    <div style={{
        height: "100vh",
        width: "full",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Card 
            sx={{ 
                display:"flex",
                height: "auto",
                width: 800, 
                 
                boxShadow:"14px 14px 13px -6px rgba(0,0,0,0.50)",
                }}>
        <CardMedia
            sx={{ width: 400, height: 400, margin: "20px 30px" }}
            image={data.image}
            title={data.name}
            component='div'
        />
        <CardContent component="div" sx={{margin: "60px 30px"}}>
            <Typography gutterBottom variant="h4" component="div">
                {data.name}
            </Typography>
            <Typography variant="h5"sx={{color: "#0f403b", margin: "10px 0"}}  component="div">
                Specie: {data.species}
            </Typography>
            <Typography gutterBottom variant="h5" sx={{color: "#45806e"}} component="div">
                Gender: {data.gender}
            </Typography>
            <Typography variant="h6" sx={{color: "#15819a"}} >
                status: {data.status}
            </Typography>
            <div>
                <Button sx={{backgroundColor:"#e0b65b", marginTop: "60px"}}>
                <Link to="/" style={{textDecoration: "none"}}>Volver al Inicio</Link>
                </Button>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}
