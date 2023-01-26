import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import './Addmovie.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};
export default function Addmovie({movies,setMovies}) {
    const [open, setOpen] = React.useState(false);
    const [rate, setRate] = React.useState(0);
    const [title, setTitle] = React.useState('');
    const [desc, setDesc] = React.useState('');
    const [pic, setPic] = React.useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleAdd=()=> setMovies([...movies,{title : title, description :desc,posterURL:pic,rating : rate, id : Math.random()}])
    return (
        <div className=''>
            <Button onClick={handleOpen}>Add Movie</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <h2 className='title'>Add Movie</h2>
                    <div className='Form'>
                        <TextField id="outlined-basic" label="Title" variant="outlined" onChange={(event) => {
                            setTitle(event.target.value);
                        }} />
                        <TextField id="outlined-basic" label="Description" variant="outlined" onChange={(event)=>{
                            setDesc(event.target.value);
                        }}/>
                    </div>
                    <div className='Form'>
                        <TextField id="outlined-basic" label="Picture" variant="outlined" onChange={(event)=>{
                            setPic(event.target.value);
                        }}/>
                        <Rating
                            name="simple-controlled"
                            value={rate}
                            onChange={(event, newValue) => {
                                setRate(newValue);
                                console.log(newValue);
                            }}
                        />
                    </div>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={()=> {handleAdd();handleClose()}}>Add</Button>
        {
            console.log(movies)
        }
                </Box>
            </Modal>
        </div>
    );
}