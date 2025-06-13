import './Tie.scss'

const Tie = ({clipContent, tagContent}) => {
    return (
        <div className="tie">
            <div className="content">
                <div className="header">
                    <h1>Benson Haley</h1>
                    <div>{clipContent}</div>
                </div>
                <div className="navigation">
                    <div className="box"></div>
                    <div className="text">
                        {
                            tagContent.map((content) => {
                                return content.href[0] === "#"
                                    ? <h2 key={content.text}><a className="special" href={content.href}>{content.text}</a></h2>
                                    : <h2 key={content.text}><a className="special" href={content.href} target="_blank" rel="noreferrer">{content.text}</a></h2>
                                
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="bar"></div>
        </div>
    );
}

export default Tie;