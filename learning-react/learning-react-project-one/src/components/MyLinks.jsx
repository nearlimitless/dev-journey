import icon_about from '../assets/images/icon_about.webp';
import icon_contact from '../assets/images/icon_contact.webp';
import icon_faq from '../assets/images/icon_faq.webp';
import icon_links from '../assets/images/icon_links.webp';
import icon_work from '../assets/images/icon_work.webp';

function MyLinks() {
    return (
        <>
            <div className="links-container">
                <ul>
                    <li><a className="reset-link-style" href="#"><img className="about-me-logo" src={icon_about}/>About</a></li>
                    <li><a className="reset-link-style" href="#"><img className="about-me-logo" src={icon_links}/>Links</a></li>
                    <li><a className="reset-link-style" href="#"><img className="about-me-logo" src={icon_work}/>Work</a></li>
                    <li><a className="reset-link-style" href="#"><img className="about-me-logo" src={icon_faq}/>FAQ</a></li>
                    <li><a className="reset-link-style" href="#"><img className="about-me-logo" src={icon_contact}/>Contact</a></li>
                </ul>
            </div>
        </>
    );
}

export default MyLinks;