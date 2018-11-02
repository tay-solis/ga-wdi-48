import React, {Component} from 'react'
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Article from '../Article/Article'
import About from '../About/About'
import Gallery from '../Gallery/Gallery'
import Contact from '../Contact/Contact'
import './Index.css'

import article1Image from '../images/article_1.jpg'
import article2Image from '../images/article_2.jpg'
import article3Image from '../images/article_3.jpg'

const article1 = {
    image: article1Image,
    title: 'Issue Twenty &mdash; The Southwest',
    body: 'Dolore asperiores, ad nam, molestiae, fugiat numquam ut dolorum est unde eum cupiditate! Totam optio ullam enim sed ipsum molestias quod fugiat, placeat, fugit nemo saepe quidem ex asperiores excepturi rerum! Earum obcaecati non dignissimos voluptate repellendus voluptatibus ratione sit totam architecto, pariatur, amet ea. Officia nulla repellat, eius voluptatibus provident repellendus sint dolorum veniam? Amet rerum alias quas aut ratione illum voluptatem excepturi, ea saepe illo quis maxime repudiandae minus praesentium nihil quaerat ducimus reprehenderit consequatur qui?'
}

const article2 = {
    image: article2Image,
    title: 'Issue Nineteen &mdash; Camping',
    body: 'Dolore asperiores, ad nam, molestiae, fugiat numquam ut dolorum est unde eum cupiditate! Totam optio ullam enim sed ipsum molestias quod fugiat, placeat, fugit nemo saepe quidem ex asperiores excepturi rerum! Earum obcaecati non dignissimos voluptate repellendus voluptatibus ratione sit totam architecto, pariatur, amet ea. Officia nulla repellat, eius voluptatibus provident repellendus sint dolorum veniam? Amet rerum alias quas aut ratione illum voluptatem excepturi, ea saepe illo quis maxime repudiandae minus praesentium nihil quaerat ducimus reprehenderit consequatur qui?'
}

const article3 = {
    image: article3Image,
    title: 'Issue Eighteen - Food',
    body: 'Dolore asperiores, ad nam, molestiae, fugiat numquam ut dolorum est unde eum cupiditate! Totam optio ullam enim sed ipsum molestias quod fugiat, placeat, fugit nemo saepe quidem ex asperiores excepturi rerum! Earum obcaecati non dignissimos voluptate repellendus voluptatibus ratione sit totam architecto, pariatur, amet ea. Officia nulla repellat, eius voluptatibus provident repellendus sint dolorum veniam? Amet rerum alias quas aut ratione illum voluptatem excepturi, ea saepe illo quis maxime repudiandae minus praesentium nihil quaerat ducimus reprehenderit consequatur qui?'
}

class Index extends Component{
    render(){
        return(
            <div>
                <NavBar />
                <Header />
                <section>
                    <h2>From the Archive</h2>

                    <div class="grid-wrapper articles">
                        <Article title={article1.title} image={article1Image} body={this.props.body}/>
                        <Article title={article2.title} image={article2.image} body={article2.body}/>
                        <Article title={article3.title} image={article3.image} body={article3.body}/>
                    </div>
                </section>
                <About />          
                <Gallery />
                <Contact />
                <Footer />
            </div>
            
        );
    }
}

export default Index;