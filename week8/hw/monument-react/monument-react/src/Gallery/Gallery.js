import React, {Component} from 'react'

import gallery1Image from '../images/gallery_1.jpg'
import gallery2Image from '../images/gallery_2.jpg'
import gallery3Image from '../images/gallery_3.jpg'
import gallery4Image from '../images/gallery_4.jpg'
import gallery5Image from '../images/gallery_5.jpg'
import gallery6Image from '../images/gallery_6.jpg'

class Gallery extends Component{
    render(){
        return(
            <section id="gallery">
		        <div className="wrap">
	        		<h2>Issue Twenty</h2>
	        		<h3>A visual guide to the Southwest</h3>
		        	<div className="masonry">
		    	    	<img src={gallery1Image} alt="/"/>
			         	<img src={gallery2Image} alt=""/>
			        	<img src={gallery3Image}alt=""/>
			        	<img src={gallery4Image} alt=""/>
				        <img src={gallery5Image} alt=""/>
			        	<img src={gallery6Image} alt=""/>
		        	</div>
		        </div>
	        </section>
        );
    }
}

export default Gallery;