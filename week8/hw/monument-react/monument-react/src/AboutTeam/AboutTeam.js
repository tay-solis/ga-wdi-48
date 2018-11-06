import React, {Component} from 'react'
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Article from '../Article/Article'
import Contact from '../Contact/Contact'
import './AboutTeam.css'

import teammate1Img from '../images/teammate1.jpg'
import teammate2Img from '../images/teammate2.jpg'
import teammate3Img from '../images/teammate3.jpg'

const teammate1 = {
    title: 'Casey',
    image: teammate1Img,
    body: 'Activated charcoal before they sold out roof party taiyaki edison bulb pickled, VHS DIY bitters selfies deep v. Knausgaard shoreditch prism, selfies 90\'s post-ironic hot chicken fixie williamsburg truffaut. Bicycle rights four loko deep v PBR&B. Austin vinyl seitan XOXO synth kombucha kale chips raclette mustache taiyaki cornhole hexagon.'
}

const teammate2 = {
    title: 'Kasi',
    image: teammate2Img,
    body: 'Lo-fi trust fund shaman raclette yr kinfolk copper mug edison bulb williamsburg scenester everyday carry shabby chic 3 wolf moon schlitz hell of. Portland fashion axe helvetica paleo typewriter taxidermy affogato shabby chic craft beer vice. Quinoa normcore roof party pug, authentic live-edge fingerstache twee kogi kickstarter ugh. Cloud bread artisan ugh messenger bag semiotics deep v fanny pack unicorn VHS tumblr asymmetrical williamsburg readymade lumbersexual taxidermy.'
}
const teammate3 ={
    title: 'Cassie',
    image: teammate3Img,
    body: 'Selfies everyday carry church-key pok pok health goth scenester. Umami cloud bread freegan thundercats. Williamsburg lomo yr, food truck bicycle rights crucifix photo booth pok pok skateboard. Vice kickstarter cronut master cleanse roof party. 3 wolf moon wolf chia, narwhal pabst taxidermy hashtag tattooed bespoke. Hot chicken green juice scenester offal, tumblr portland tousled lo-fi crucifix pitchfork. Dreamcatcher iceland before they sold out, brunch farm-to-table humblebrag asymmetrical ugh knausgaard hashtag gluten-free selvage chicharrones tumeric.' 
}

class AboutTeam extends Component {
    render(){
        return(
            <div>
                <NavBar />
                <Header />
                <section>
                    <h2>Connect with Our Team</h2>

                    <div class="grid-wrapper articles">
                        <Article title={teammate1.title} image={teammate1.image} body={teammate1.body}/>
                        <Article title={teammate2.title} image={teammate2.image} body={teammate2.body}/>
                        <Article title={teammate3.title} image={teammate3.image} body={teammate3.body}/>
                    </div>
                </section>
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default AboutTeam;