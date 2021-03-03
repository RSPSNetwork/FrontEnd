import React from 'react'
import Header from '../Header/Header'
import './Home.css'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        background: '#24252A',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}))


const Home = () => {

    const classes = useStyles()

    return (
        <>
        <Header />
        <div className={classes.root} id='Home'>

        </div>
        </>
    )
}

export default Home
