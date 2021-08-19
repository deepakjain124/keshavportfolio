import React, { useState } from 'react'

import image2 from '../photos/keshav2.jpg'
const About = () => {
    const [data, setdata] = useState(false)

    const change = () => {
        setdata(!data)
    }
    return ( <
        >
        <
        section className = "section-2" >
        <
        div className = "second-container" >
        <
        div className = "container" >
        <
        div className = "second-left" >
        <
        h1 > About Me < /h1>{' '} <
        p className = "about" >
        is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy
        text ever since the 1500 s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960 s with the release o f Letraset sheets containing Lorem Ipsum passages, { ' ' } <
        /p>{' '} <
        br / >
        <
        br / >
        <
        p className = "academics" >
        My Academics { ' ' } {
            data ? ( <
                a href = "#know" >
                <
                i className = "fas fa-arrow-left arrow"
                onClick = { change } > { ' ' } <
                /i>{' '} <
                /a>
            ) : ( <
                a href = "#know" > { ' ' } <
                i className = "fas fa-arrow-right arrow"
                onClick = { change } > { ' ' } <
                /i>{' '} <
                /a>
            )
        } { ' ' } <
        /p>{' '} <
        /div>{' '} <
        div className = "second-right"
        id = "know" > { ' ' } {
            data ? ( <
                >
                <
                div className = "details" >
                <
                h1 > High School < /h1> <p> Happy Public Sr.Sec.School </p > { ' ' } <
                p > 70 % aggr. < /p> <br / >
                <
                h1 > Undergrad < /h1>{' '} <
                p > { ' ' }
                Modern Institute Of Technology And Research centuries { ' ' } <
                /p>{' '} <
                p > B.Tech(CSE) < /p> <p> 8.00 CGPA </p > < br / >
                <
                h1 > Certifications < /h1>{' '} <
                p > Full Stack MERN Development < /p>{' '} <
                p > React Native Development < /p> <p> MySQL Bootcamp </p >
                <
                /div>{' '} <
                />
            ) : ( <
                img src = { image2 }
                alt = "keshav" / >
            )
        } { ' ' } <
        /div>{' '} <
        /div>{' '} <
        /div>{' '} <
        /section>{' '} <
        />
    )
}
export default About