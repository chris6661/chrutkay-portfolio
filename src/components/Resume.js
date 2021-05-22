import React from 'react'; 

const Resume = () => {

const frontEnd = [ 'HTML', 'CSS', 'JavaScript', 'jQuery', 'React', 'Bootstrap' ]

const backEnd = ['APIs', 'Node', 'Express', 'MySQL', 'Mongoose', 'REST']    

const link = <a href = "https://docs.google.com/document/d/e/2PACX-1vRuRLwppqTa1t5p0UAGpRvVGPJbXjLvXg7FUoasOlWckTD5rnqJjOXIbkeiy4XayF5kuxlrYBqCZJWv/pub">here</a>  


    return (
    <div className = "resume">
        <div class="container">
            <h1>Resume</h1>
                <div class="row">
                    <div class="col">
                        <h2>Front End Proficiencies</h2> 
                    {
                        frontEnd.map(front => <h3>{front}</h3>)
                    }
                    </div>
                    <div class="col">
                        <h2>Back End Proficiencies</h2>
                    {
                        backEnd.map(back => <h3>{back}</h3>)
                    }
                    </div>
                </div>
                            <br/> <br/>
                    <h4>Click {link} to view my resume.</h4>
                
        </div>
    </div>
    )
}

export default Resume;
