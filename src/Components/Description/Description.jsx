import { Button } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"

export default function Description({ movies }) {
    const {id} = useParams()
    const navigate = useNavigate()
    const found = movies.find(el => el.id == id)
    return (
        <div>
            <center>
                <h3>
                    {found.title}
                </h3>
            
            <h4>
                {found.description}
            </h4>
            <img src={found.posterURL} alt="movie app" />
            </center>
            <Button onClick={
                () =>{
                    navigate("/")
                }
            } >Back</Button>
        </div>
    )
}