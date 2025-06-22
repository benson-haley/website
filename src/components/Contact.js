import './Contact.scss';

const Contact = ({ children }) => {
    return (
        <div className="contact">
            <hr></hr>
            <p>bah8454@rit.edu</p>
            <hr></hr>
            <p>518 429 1625</p>
            <hr></hr>
            <p><a href="https://github.com/benson-haley">GitHub</a></p>
            <hr></hr>
            <p><a href="https://www.linkedin.com/in/benson-haley">LinkedIn</a></p>
            <hr></hr>
        </div>
    );
}

export default Contact;