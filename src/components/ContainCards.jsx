import CardCharacter from "./CardCharacter.jsx";

import { Box } from "@mui/material";
import { flexbox } from "@mui/system";

export default function ContainCards({characters}) {
  return (
    <Box sx={{
      display:"flex", 
      justifyContent:"space-around", 
      flexWrap:"wrap",
      padding: "20px"
      }}>
      {characters &&
        characters.map(({name, status, image, species, gender, id}) => {
          return <CardCharacter name={name} status={status} image={image} key={id} species={species} gender={gender} />;
        })}
    </Box>
  );
}
