import React from 'react'

export default function About(props) {

    //  const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    //  })
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'rgba(36 74 104)' : 'white'
    }
    return (
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count, or
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong> Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils report the number of word and character. Thus it is suitable for writng text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser compatible </strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This word counter software works in any web Browser such as Chrome, firefox, Inerner Explorer, Safari, Opera. It suits to count character in facebook, blog, book, excel documents, pdf document, essay, etc.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
