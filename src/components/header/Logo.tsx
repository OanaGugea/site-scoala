import { makeStyles } from '@material-ui/core/styles'
import logo from './assets/sigla.png'

const useStyle = makeStyles(() => ({
    logoImage: {
        justifyContent: 'center',
        display: 'flex'
    },
    photo: {
        height: '150px',
        width: '150px'
    }
}))

export const Logo = () => {
    const classes = useStyle();
    return (
        <div className={classes.logoImage}>
            <img src={logo} alt='Logo' className={classes.photo}/>
        </div>
    )
}
