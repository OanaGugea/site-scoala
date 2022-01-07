import frontPart from './assets/front-part.jpeg'
import backPart from './assets/back-yard.jpeg'
import {makeStyles} from "@material-ui/core/styles";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const useStyle = makeStyles(() => ({
    imageContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    photo: {
        height: '1200px',
        width: '1200px',
        margin: '0 15px'
    },
    photoHeight: {
        height: '700px'
    }
}))

// export const PhotoGrid = () => {
//     const classes = useStyle();
//     return (
//         <div className={classes.imageContainer}>
//             <img src={frontPart} alt="front-part" className={classes.photo}/>
//             <img src={backPart} alt="back-yard" className={classes.photo}/>
//         </div>
//     )
// }

export const PhotoGrid = () => {
    const classes = useStyle();
    return (
    <AwesomeSlider className={classes.photoHeight}>
      <div><img src={frontPart} alt="front-part"/></div>
      <div><img src={backPart} alt="back-yard"/></div>
    </AwesomeSlider>
    )};

  export default PhotoGrid;
