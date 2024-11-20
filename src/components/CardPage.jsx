import React from 'react';


const CardPage = () => {
    return (
        <div className=" mt-20 flex flex-wrap gap-20 cursor-pointer">
                <div className="card shoe-card">
                    <img
                        src="/sneaker4.avif"
                        alt="Shoe"
                        className="card-img-top"
                    />
                    <div className="card-body text-center">
                        <h3 className="card-title">Awesome Sneakers</h3>
                        <p className="card-text">$99.99</p>
                        <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
                <div className="card shoe-card">
                    <img
                        src="/sneaker4.avif"
                        alt="Shoe"
                        className="card-img-top"
                    />
                    <div className="card-body text-center">
                        <h3 className="card-title">Awesome Sneakers</h3>
                        <p className="card-text">$99.99</p>
                        <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
                <div className="card shoe-card">
                    <img
                        src="/sneaker4.avif"
                        alt="Shoe"
                        className="card-img-top"
                    />
                    <div className="card-body text-center">
                        <h3 className="card-title">Awesome Sneakers</h3>
                        <p className="card-text">$99.99</p>
                        <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
                <div className="card shoe-card">
                    <img
                        src="/sneaker4.avif"
                        alt="Shoe"
                        className="card-img-top"
                    />
                    <div className="card-body text-center">
                        <h3 className="card-title">Awesome Sneakers</h3>
                        <p className="card-text">$99.99</p>
                        <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
                
                {/* Add more cards as needed */}
            </div>
        </div>
    );
}

export default CardPage;
