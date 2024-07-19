import img from '../images/sheltr-mauve.png'
export default function Logo() {
    return(
        <div className='App-logo'>
            <img alt="sheltr logo" id="logo" src={img} />
            <p><span className='App-subheader'>BRINGING LOST PAWS HOME.</span></p>
            <p> <span className='App-subheader'>coming soon</span></p>
        </div>
    )
}