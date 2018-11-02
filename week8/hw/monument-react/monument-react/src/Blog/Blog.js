import React, {Component} from 'react'
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import BlogArticle from '../BlogArticle/BlogArticle'
import BlogAside from '../BlogAside/BlogAside';
import CommentForm from '../CommentForm/CommentForm'
import Footer from '../Footer/Footer';
import './Blog.css'


class Blog extends Component{
    render(){
        return(
            <div>
                <NavBar />
                <Header />
                <div class="wrap grid-wrapper">
                    <section>
                        <BlogArticle/>
                    </section>
                    <BlogAside />
                </div>
                <CommentForm/>
                <Footer />
            </div>
            
        );
    }
}

export default Blog;