import React from 'react'

const Experience = () => {
    return (
        <div id = 'experience'className='experience'>
            <div className='d-flex justify-content-center my-5'>
            <h1>Experience</h1>
            </div>
        <div className= 'container experience-wrapper'>
            <div className='timeline-block timeline-block-right'>
                <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>2009-2020</h3>
                        <p>Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage prosciutto chicken spare ribs salami picanha doner. Kevin capicola sausage, buffalo bresaola venison turkey shoulder picanha ham pork tri-tip meatball meatloaf ribeye. Doner spare ribs andouille bacon sausage. Ground round jerky brisket pastrami shank.</p>
                    </div>
                </div>
                {/* - */}
                <div className='timeline-block timeline-block-left'>
                <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>November 2020</h3>
                        <p>Day 1 journal entry: I started attending the Full Stack Web Development coding boot camp at UTA.</p>
                    </div>
                </div>
                {/* - */}
                <div className='timeline-block timeline-block-right'>
                <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>December 7th, 2020</h3>
                        <p>Day 14 journal entry: I struggled through making my first portfolio using HTML and CSS.... tomorrow, I shall redo my portfolio in a much better, sleeker design.</p>
                    </div>
                </div>
                {/* - */}
                <div className='timeline-block timeline-block-left'>
                <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>December 19, 2020</h3>
                        <p>Day 38 journal entry: A day which will live in infamy: Javascript and I met for the first time and I started understanding more about the mysterious ways the world works.... and I guess some webistes too.</p>
                    </div>
                </div>
                {/* - */}
                <div className='timeline-block timeline-block-right'>
                <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>Tomorrow</h3>
                        <p>Day (what feels like) 271 journal entry: Tomorrow finally came and I am redoing my portolfio with React. It will be barebones skeleton and hard on the eyes design for now but in the end something easy to look at will persevere.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
