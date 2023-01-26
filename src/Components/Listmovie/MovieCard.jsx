import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
const labels = {
    1: '5ayeb',
    2: '5ayeb',
    3: 'cv',
    4: 'yenja7',
    5: 'mich 3adi',
};
export default function MovieCard({ el ,movies,setMovies }) {
    const handleDelete = (el) => setMovies(movies.filter((e) => e.id!=el.id))
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="350"
                image={el.posterURL}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {el.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {el.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>handleDelete(el)}>Delete</Button>
                <Rating
                    name="text-feedback"
                    value={el.rating}
                    readOnly
                    precision={0.5}
                />
                <Typography variant="h6" component="h2">
                    <Box sx={{ ml: 2 }}>{labels[el.rating]}</Box>
                </Typography>
            </CardActions>
        </Card>
    )
}
