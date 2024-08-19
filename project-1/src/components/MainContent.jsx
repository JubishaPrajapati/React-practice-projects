const MainContent = ()=>{
    return(
        <main className="content container">
            <div className="content1">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Your feet deserves the best and we're here to help you get the best shoes. Get the shoes that best suits your feet.</p>

                <div className="content-btn">
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>

                <div className="site-available">
                    <p>Also available on</p>
                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="amazon logo"/>
                    </div>
                </div>
            </div>
            <div className="content-img">
            <img src="/images/shoe-image.png" alt="shoe img"/>
            </div>
        </main>
    )
}

export default MainContent;