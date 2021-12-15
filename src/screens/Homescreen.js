import React from 'react'
import { Container, Row, Col, CarouselItem, button } from 'react-bootstrap'
import './Homescreen.css'
const Homescreen = () => {
    return (
        <div>

            {/* carousel start */}

            <Row>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner " >
                        <div class="carousel-item active">
                            <img src="../../images/c1.jpg" class="d-block w-100" alt="..." style={{ height: "50rem" }} />
                        </div>
                        <div class="carousel-item">
                            <img src="../../images/c2.jpg" class="d-block w-100" alt="..." style={{ height: "50rem" }} />
                        </div>
                        <div class="carousel-item">
                            <img src="../../images/c3.jpg" class="d-block w-100" alt="..." style={{ height: "50rem" }} />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </Row>

            {/* // carousel end */}


            <Container>
                <Row className='my-3'>
                    <Col>
                        <div class="card mx-3 " style={{ width: "18rem" }}>
                            <img src="../../images/cc.jpg" class="card-img-top impDiv" />
                        </div>
                    </Col>
                    <Col className='colTxt'>
                        <h2 className='Text'>Best Calorie Manager</h2>
                        <h3>Best Platform which helps you to track your Calorie intake.
                        </h3>
                        <h2 style={{ color: 'green' }}>Stay Fit and Healthy!</h2>
                    </Col>
                </Row>
                <Row className='my-3'>

                    {/* Characteristic cards */}

                    <div class="card mx-3 keyCard" style={{ width: "18rem" }}>
                        <img src="../../images/7.png" class="card-img-top img-responsive" style={{ height: "10rem" }} alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Food & Water</h5>

                        </div>
                    </div>
                    <div class="card mx-3 keyCard" style={{ width: "18rem" }}>
                        <img src="../../images/8.png" class="card-img-top img-responsive" style={{ height: "10rem" }} alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Track Nutrient</h5>

                        </div>
                    </div>
                    <div class="card mx-3 keyCard" style={{ width: "18rem" }}>
                        <img src="../../images/9.png" class="card-img-top img-responsive" style={{ height: "10rem" }} alt="..." />
                        <div class="card-body">

                            <h5 class="card-title">Notifications</h5>

                        </div>
                    </div>
                    <div class="card mx-3 keyCard" style={{ width: "18rem" }}>
                        <img src="../../images/10.png" class="card-img-top img-responsive" style={{ height: "10rem" }} alt="..." />
                        <div class="card-body">

                            <h5 class="card-title">Card title</h5>

                        </div>
                    </div>
                </Row>
            </Container>



            {/* latest products cards */}

            <h2 className='text-center my-3 Text'>Latest Products</h2>
            <Container>
                <hr></hr>
                <Row className='my-3'>
                    <div class="card mx-3 " style={{ width: "18rem" }}>
                        <img src="../../images/pasta.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card mx-3" style={{ width: "18rem" }}>
                        <img src="../../images/salad.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card mx-3" style={{ width: "18rem" }}>
                        <img src="../../images/tomato.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card mx-3" style={{ width: "18rem" }}>
                        <img src="../../images/tasty.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </Row>
            </Container>

            {/* key features card */}

            <h2 className='text-center my-3 Text'>Key Features</h2>
            <div className='keydiv'>
                <Container className='keyContainer'>
                    <Row className='my-3'>
                        <div class="card mx-3 keyCard" style={{ width: "18rem" }}>
                            <img src="../../images/f7.png" class="card-img-top img-responsive" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Healthy Diet Planning</h5>
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                        <div class="card mx-3 keyCard" style={{ width: "18rem" }}>
                            <img src="../../images/f2.png" class="card-img-top img-responsive" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Diets and Nutrients</h5>

                            </div>
                        </div>
                        <div class="card mx-3 keyCard" style={{ width: "18rem" }}>
                            <img src="../../images/f3.png" class="card-img-top img-responsive" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Beautiful Visual Design</h5>

                            </div>
                        </div>
                        <div class="card mx-3 keyCard" style={{ width: "18rem" }}>
                            <img src="../../images/f4.png" class="card-img-top img-responsive" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Digital Coach/Tracker</h5>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>

            {/* Testimonials cards */}


            <Container>
                <h2 className='text-center my-4 Text'>-Testimonials-</h2>

                <hr></hr>
                <Row className='my-3 d-flex justify-content-center'>

                    <div class="card mx-3 animCard" style={{ width: "18rem" }}>
                        <img src="../../images/t1.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Akash Agrawal</h5>
                        </div>
                    </div>
                    <div class="card mx-3" style={{ width: "18rem" }}>
                        <img src="../../images/t2.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Marry Jones</h5>
                        </div>
                    </div>
                    <div class="card mx-3" style={{ width: "18rem" }}>
                        <img src="../../images/t3.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Mathew</h5>
                        </div>
                    </div>
                </Row>
            </Container>

        </div>
    )
}

export default Homescreen
