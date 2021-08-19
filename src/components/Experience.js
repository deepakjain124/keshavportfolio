import React, { useState } from 'react'
import Tech from './Technologies'
const Experience = () => {
    const [data, setdata] = useState(false)
    const change = () => {
        setdata(!data)
    }

    return ( <
        >
        <
        section className = "section-3"
        id = "exper." >
        <
        h1 className = "third-heading" > Experience < /h1>{' '} {
            data ? ( <
                p > Working in the industry
                for an year now < /p>
            ) : ( <
                p > Technology stack i have working with < /p>
            )
        } { ' ' } {
            data ? ( <
                Tech / >
            ) : ( <
                > { ' ' } <
                div className = "third-container" >
                <
                div className = "container" >
                <
                div className = "third-left" >
                <
                h1 > Frontend web developer < /h1> <br / >
                <
                h3 > For: -QuantaVidLLC < /h3> <br / >
                <
                h3 > Employee Type: < /h3> <br / >
                <
                h3 > Internship < /h3> <br / >
                <
                h3 > Duration Of Internship < /h3> <br / >
                <
                h3 > 11 months < /h3>{' '} <
                /div>{' '} <
                div className = "third-right" >
                <
                h1 > React Native developer < /h1> <br / >
                <
                h3 > For: -QuantaVidLLC < /h3> <br / >
                <
                h3 > Employee Type: < /h3> <br / >
                <
                h3 > Internship < /h3> <br / >
                <
                h3 > Duration Of Internship < /h3> <br / >
                <
                h3 > 2 months < /h3>{' '} <
                /div>{' '} <
                /div>{' '} <
                /div>{' '} <
                />
            )
        } { ' ' } <
        p className = "skill" >
        My Skills { ' ' } {
            data ? ( <
                a href = "#exper." > { ' ' } <
                i class = "fas fa-arrow-left arrow"
                onClick = { change } > { ' ' } <
                /i> <
                /a>
            ) : ( <
                a href = "#exper." >
                <
                i class = "fas fa-arrow-right arrow"
                onClick = { change } > { ' ' } <
                /i> <
                /a>
            )
        } { ' ' } <
        /p>{' '} <
        /section>{' '} <
        div className = "offers" >
        <
        h1 > Open For Freelance Offers < /h1> <button> Send me an email </button > { ' ' } <
        /div>{' '} <
        div className = "designing" >
        <
        h2 > { ' ' }
        Design and developed by { ' ' } <
        span style = {
            { color: 'blue' } } > @keshav_saini < /span>{' '} <
        /h2>{' '} <
        div className = "icons" >
        <
        p >
        <
        i class = "fab fa-github" > < /i>{' '} <
        /p>{' '} <
        p >
        <
        i class = "fab fa-instagram" > < /i>{' '} <
        /p>{' '} <
        p >
        <
        i class = "fab fa-whatsapp" > < /i>{' '} <
        /p>{' '} <
        p >
        <
        i class = "fas fa-envelope" > < /i>{' '} <
        /p>{' '} <
        /div>{' '} <
        /div>{' '} <
        />
    )
}
export default Experience