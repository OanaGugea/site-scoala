import { Carousel } from 'react-responsive-carousel';

export const PhotoGrid = () => {
    return (
        <Carousel>
            <div>
                <img src="assets/front-part.jpeg" alt="front-part"/>
                <p>Front Part</p>
            </div>
            <div>
                <img src="assets/back-yard.jpeg" alt="back-yard"/>
                <p>Back Yard</p>
            </div>
        </Carousel>
    )
}
