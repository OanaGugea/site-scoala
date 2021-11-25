import frontPart from './assets/front-part.jpeg'
import backPart from './assets/back-yard.jpeg'
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
    imageContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    photo: {
        height: '300px',
        width: '350px',
        margin: '0 15px'
    }
}))

export const PhotoGrid = () => {
    const classes = useStyle();
    return (
        <div className={classes.imageContainer}>
            <img src={frontPart} alt="front-part" className={classes.photo}/>
            <img src={backPart} alt="back-yard" className={classes.photo}/>
        </div>
    )
}
