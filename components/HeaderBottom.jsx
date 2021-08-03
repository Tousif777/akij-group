import React from 'react';



const HeaderBottom = () => {

    const data = [
        'commercial vehicle',
        'private vehicle',
        'motor servicing', 
        'garage equipment',
        'spare parts',
        'electric motorcycle',
        'forklit/stacker',
        'construction machinary',
        'special vehicle'
    ]

    return (
        <div className="w-full bg-gradient-to-br from-akij-blue to-akij-lblue text-white">
            <div className="container mx-auto flex justify-between">
                <div className="w-1/5 flex py-1">
                    <div className="text-xl">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48" d="M88 152h336M88 256h336M88 360h336"></path></svg>
                    </div>
                    <p className="uppercase text-sm px-5 font-bold">Categories</p>
                </div>
                <div className="w-4/5 flex justify-between font-bold items-center py-1">
                    {
                        data.map((item, i) => <a key={i} className="sub-button uppercase px-2 font-medium cursor-pointer hover:text-akij-red">{item}</a>)
                    }
                </div>
            </div>
            <style jsx>{`
                .sub-button {
                    font-size: 10px;
                }
            `}</style>
        </div>
    )
};


export default HeaderBottom;