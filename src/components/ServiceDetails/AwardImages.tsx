import React from 'react'

const AwardImages = () => {
    return (
        <section className="pb-0 pt-0">
            <div className="container">
                <div className="row align-items-center justify-center">
                    <div className="col-12 col-md-8 col-lg-8">
                        <h1 className="text-center display-5">Award-Winning Service</h1>
                    </div>
                </div>
                <div className='row align-items-center justify-center awardImages mx-0'>
                    <div className="col-6 col-md-3">
                        <img src="/assets/images/award-01.png" alt="" />
                    </div>
                    <div className="col-6 col-md-3">
                        <img src="/assets/images/award-02.png" alt="" />
                    </div>
                    <div className="col-6 col-md-3">
                        <img src="/assets/images/award-03.png" alt="" />
                    </div>
                    <div className="col-6 col-md-3">
                        <img src="/assets/images/award-04.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AwardImages