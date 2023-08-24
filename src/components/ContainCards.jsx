import CardCharacter from "./CardCharacter.jsx";
import PaginationApp from "./PaginationApp.jsx";

import { Box } from "@mui/material";


export default function ContainCards({characters, setCurrentPage, currentPage}) {
  return (
    <>
      <Box sx={{
        display:"flex", 
        justifyContent:"space-around", 
        flexWrap:"wrap",
        padding: "20px"
        }}>
        {characters &&
          characters.map(({name, status, image, species, gender, id}) => {
            return <CardCharacter name={name} status={status} image={image} key={id} id={id} species={species} gender={gender} />;
          })}
      </Box>
      <PaginationApp setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  );
}
