import React from 'react'

// when screem width >= md, 
//               4+8

// when screem width < md, that is small screen, take up 100%
//               12
//               12
const SiderBarDemoPage = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4">Sidebar</div>
                <div className="col-md-8">
                    main content
                    <div className='d-none d-md-block'>
                        visible only on medium and large screens
                    </div>

                    {/* different screens: text different align */}
                    {/* mobile screens: text center */}
                     {/* other screens: text start */}
                    <div className='text-center text-md-start'>
                        different screens: text different align
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SiderBarDemoPage