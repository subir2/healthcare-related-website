import React from 'react';
import './About.css';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div>
             <Banner/>
             <h1>Our philosophy</h1>
            
            <div className="about-body">
             <h3>Proven learning approaches</h3>
             <p>Teaching is one of the most challenging and complex jobs on the planet. Our digital resources, tools, and learning materials are developed by educational experts to incorporate leading pedagogical practices. They are useful in any type of teaching moment and many can be used to support national education standards.</p>
             <hr></hr>
             <h3>Empowered educators</h3>
             <p>From school teachers and tutors to home schoolers and parents, engaged adults are the key to unlocking each child's potential and drive to learn. We empower all kinds of educators to teach kids by providing the best educational resources in any form or device to be used at home, at school, and everywhere in-between.</p>
             <hr />

             <h3>Unique experiences</h3>
             <p>There is no such thing as "one size fits all" in education; each educator and child has unique challenges and goals. We celebrate the diversity of our users by offering differentiated resources that can meet a wide range of educational needs - and raise kids' confidence in learning.</p>

             <hr />

<h3>Conscientious and supportive</h3>
<p>We continue to provide academically sound content of the highest caliber and welcome input from our users as we address issues of equity, diversity, inclusivity and representation. Since we know there are many different approaches to teaching and education, we develop our materials to complement these different philosophies across subjects and grades</p>

            </div>
            <Footer/>
        </div>
        
    );
};

export default About;