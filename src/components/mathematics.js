import React from 'react';
import YouTube from 'react-youtube';
import AdvancedDemo from './galleria';



const Fractals = () => {

    const text = 'mathematics';
    const animatedText = text.split('').map((letter, index) => (
        <span key={index} className="animated-letter" style={{ animationDelay: `${index * 0.1}s` }}>
            <strong>{letter}</strong>
        </span>
    ));

    const videoId = 'v99dsVBE4xQ';
    const videoId2 = 'RU0wScIj36o';

    const playerOptions = {
        height: '390',
        width: '540',
        playerVars: {
            autoplay: 0,
        },
    };

    const playerContainerStyle = {
        marginLeft: '2in',
        marginRight: '2in',
        maxWidth: '100%', // Make sure the container does not shrink below its content width

    };

    const pageContainerStyle = {
        backgroundColor: '#d4d0d0',
        padding: '0.5in', // Adjust the padding to create the desired margin width

        alignItems: 'center',
    };

    return (
        <div>
            <section data-bs-version="5.1" className="header1 cid-tA2E9yc2OJ26" id="header1-2p">
                <div className="mbr-overlay" style={{ opacity: 0.2, backgroundColor: 'rgb(255, 255, 255)' }}></div>
                <div className="align-center container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-9">
                            <h1 className="mbr-section-title mbr-fonts-style mb-3 display-1">
                                {animatedText}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: '#d4d0d0' }}>

                <div className="row justify-content-center">
                    <div className="col-12 col-md-11" style={{ textAlign: "left" }}>
                        <h2 style={{ marginLeft: "2in", marginRight: "2in", fontSize: '1.5rem', color: '#203530' }}><br /><br /> Mathematics is the abstract science of numbers, quantities, shapes, and patterns. It involves the
                            study and manipulation of mathematical objects and concepts using logical reasoning, critical
                            thinking, and problem-solving skills. Mathematics has been developed and refined over thousands
                            of years and is a crucial tool in various fields, including science, engineering, economics, and
                            more.</h2>
                        <br />
                        <h3 style={{ marginLeft: "2in", marginRight: "2in", fontSize: '1.15rem', color: '#203530' }}>1. Algebra</h3>
                        <h3 style={{ marginLeft: "2.5in", marginRight: "2in", fontSize: '1.15rem', color: '#203530' }}>The study of mathematical symbols and their manipulation to solve equations. It includes topics like linear algebra, abstract algebra, and number theory.</h3>
                        <p style={{ marginLeft: "3in", color: '#203530' }}>Famous mathematicians: Évariste Galois, Leonhard Euler, and Pierre de Fermat.</p><br/>

                        <h3 style={{ marginLeft: "2in", fontSize: '1.15rem', color: '#203530' }}>2. Geometry</h3>
                        <h3 style={{ marginLeft: "2.5in", marginRight: "2in", fontSize: '1.15rem', color: '#203530' }}>The study of shapes, sizes, and properties of figures and spaces. It includes topics like Euclidean geometry, non-Euclidean geometry, and topology.</h3>
                        <p style={{ marginLeft: "3in", color: '#203530' }}>Famous mathematicians: Euclid, Carl Friedrich Gauss, and Bernhard Riemann.</p><br/>

                        <h3 style={{ marginLeft: "2in", fontSize: '1.15rem', color: '#203530' }}>3. Calculus</h3>
                        <h3 style={{ marginLeft: "2.5in", marginRight: "2in", fontSize: '1.15rem', color: '#203530' }}>The study of change and motion, dealing with limits, differentiation, integration, and infinite series. It is divided into differential and integral calculus.</h3>
                        <p style={{ marginLeft: "3in", color: '#203530' }}>Famous mathematicians: Isaac Newton, Gottfried Wilhelm Leibniz, and Augustin-Louis Cauchy.</p><br/>

                        <h3 style={{ marginLeft: "2in", fontSize: '1.15rem', color: '#203530' }}>4. Probability and Statistics</h3>
                        <h3 style={{ marginLeft: "2.5in", marginRight: "2in", fontSize: '1.15rem', color: '#203530' }}>The study of randomness, uncertainty, and data analysis. It includes topics like probability theory, descriptive statistics, and inferential statistics.</h3>
                        <p style={{ marginLeft: "3in", color: '#203530' }}>Famous mathematicians: Andrey Kolmogorov, Pierre-Simon Laplace, and Ronald A. Fisher.</p><br/>

                        <h3 style={{ marginLeft: "2in", fontSize: '1.15rem', color: '#203530' }}>5. Discrete Mathematics</h3>
                        <h3 style={{ marginLeft: "2.5in", marginRight: "2in", fontSize: '1.15rem', color: '#203530' }}>The study of countable, distinct elements, often used in computer science and combinatorics. It includes topics like graph theory, set theory, and algorithms.  </h3>
                        <p style={{ marginLeft: "3in", color: '#203530' }}>Famous mathematicians: Paul Erdős, Richard P. Stanley, and George Pólya.</p><br/>

                        <h3 style={{ marginLeft: "2in", fontSize: '1.15rem', color: '#203530' }}>6. Numerical Analysis</h3>
                        <h3 style={{ marginLeft: "2.5in", marginRight: "2in", fontSize: '1.15rem', color: '#203530' }}>The study of algorithms and approximations used to solve mathematical problems numerically. It includes topics like interpolation, optimization, and numerical integration. </h3>
                        <p style={{ marginLeft: "3in", color: '#203530' }}>Famous mathematicians: John von Neumann, Carl Gustav Axel Harnack, and James H. Wilkinson.</p><br/>

                        <h3 style={{ marginLeft: "2in", fontSize: '1.15rem', color: '#203530' }}>7. Mathematical Physics</h3>
                        <h3 style={{ marginLeft: "2.5in", marginRight: "2in", fontSize: '1.15rem', color: '#203530' }}>The application of mathematical methods to solve problems in physics. It includes topics like quantum mechanics, general relativity, and string theory.  </h3>
                        <p style={{ marginLeft: "3in", color: '#203530' }}>Famous mathematicians: Albert Einstein, Roger Penrose, and Hermann Weyl.</p><br/>

                        <h3 style={{ marginLeft: "2in", fontSize: '1.15rem', color: '#203530' }}>8. Mathematical Logic</h3>
                        <h3 style={{ marginLeft: "2.5in", marginRight: "2in", fontSize: '1.15rem', color: '#203530' }}>The study of formal systems and their applications in mathematics, computer science, and philosophy. It includes topics like propositional logic, first-order logic, and model theory.  </h3>
                        <p style={{ marginLeft: "3in", color: '#203530' }}>Famous mathematicians: Kurt Gödel, Alfred Tarski, and Alan Turing.</p><br/>

                        <h3 style={{ marginLeft: "2in", fontSize: '1.15rem', color: '#203530' }}>9. Category Theory</h3>
                        <h3 style={{ marginLeft: "2.5in", marginRight: "2in", fontSize: '1.15rem', color: '#203530' }}>An abstract framework used to describe mathematical structures and their relationships. It is applied in various areas of mathematics and computer science.  </h3>
                        <p style={{ marginLeft: "3in", color: '#203530' }}>Famous mathematicians: Saunders Mac Lane, Samuel Eilenberg, and Grothendieck.</p><br/>

                        <h3 style={{ marginLeft: "2in", fontSize: '1.15rem', color: '#203530' }}>10. Applied Mathematics</h3>
                        <h3 style={{ marginLeft: "2.5in", marginRight: "2in", fontSize: '1.15rem', color: '#203530' }}>This branch focuses on using mathematics to model and solve real-world problems in diverse fields like finance, engineering, and biology. </h3>
                        <p style={{ marginLeft: "3in", color: '#203530' }}>Famous mathematicians: John Nash, Benoît Mandelbrot, and Maryam Mirzakhani.</p>

                        <br /><br />
                    </div>
                </div >

            </section>

            <section data-bs-version="5.1" className="content7 cid-tA2rnsadC2455" id="content7-2l">
                <div className="mbr-overlay" style={{ opacity: 0.0, backgroundColor: 'rgb(255, 255, 255)' }}></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10">
                            <blockquote>
                                <h5 className="mbr-section-title mbr-fonts-style mb-2 display-2"><strong>Hilbert Curve</strong></h5>
                                <p className="mbr-text mbr-fonts-style display-4">
                                    <br />The Hilbert Curve is a space-filling, continuous fractal curve that was first introduced by the German mathematician David Hilbert in 1891. It is a curve that completely fills a two-dimensional space, specifically a square, while maintaining its continuity and self-similarity.
                                    <br /><br />The Hilbert Curve is constructed through an iterative process, starting with a simple U-shaped curve called the "base curve". Each iteration involves taking the previous curve, scaling it down by half, and arranging four copies of it in a specific pattern. The copies are connected to form a continuous curve, and the process is repeated for multiple iterations. With each iteration, the curve becomes more intricate and fills more of the square.
                                    <br /><br />As the number of iterations increases, the curve becomes more complex and fills the square more densely. In the limit, as the number of iterations approaches infinity, the Hilbert Curve becomes a space-filling curve that densely covers the entire square.
                                    <br /><br />The Hilbert Curve has applications in various fields such as computer graphics, image processing, and data storage, as it provides an efficient way to map between one-dimensional and two-dimensional spaces.
                                    <br /><br />
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>


            <div style={pageContainerStyle}>
                <div style={playerContainerStyle}>
                    <YouTube videoId={videoId} opts={playerOptions} />
                    <br />
                    <YouTube videoId={videoId2} opts={playerOptions} />
                    <br /><br />

                    <div className="row justify-content-center">
                        <div className="col-12 col-md-11" style={{ textAlign: "center" }}>
                            <h3 className="mbr-section-title mb-0 mbr-fonts-style display-2" style={{ color: "#203530", padding: "0.5rem" }}>
                                <strong>Natural phenomena with fractal features</strong><br /><br />
                            </h3>
                        </div>
                        <h4 style={{ fontSize: "1rem" }}>Approximate fractals found in nature display self-similarity over extended, but finite, scale ranges. The connection between fractals and leaves, for instance, is currently being used to determine how much carbon is contained in trees. Phenomena known to have fractal features include:</h4>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-11" style={{ textAlign: "left" }}>
                                <br />
                                <div className="row" style={{ marginLeft: "-0.9in", marginRight: "-1in" }}>
                                    <div className="col">
                                        <ul>
                                            <li>Actin cytoskeleton</li>
                                            <li>Algae</li>
                                            <li>Animal coloration patterns</li>
                                            <li>Blood vessels and pulmonary vessels</li>
                                            <li>Brownian motion </li>
                                            <li>Clouds and rainfall areas </li>
                                            <li>Coastlines</li>
                                            <li>Craters</li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <ul>
                                            <li>Crystals</li>
                                            <li>DNA</li>
                                            <li>Dust grains</li>
                                            <li>Earthquakes</li>
                                            <li>Fault lines</li>
                                            <li>Geometrical optics</li>
                                            <li>Heart rates</li>
                                            <li>Heart sounds</li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <ul>
                                            <li>Lake shorelines and areas </li>
                                            <li>Lightning bolts</li>
                                            <li>Mountain goat horns</li>
                                            <li>Polymers</li>
                                            <li>Percolation</li>
                                            <li>Mountain ranges</li>
                                            <li>Ocean waves</li>
                                            <li>Pineapple</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <AdvancedDemo />

                </div>
            </div>
        </div>
    );
};

export default Fractals;







