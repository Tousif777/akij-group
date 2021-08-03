import React from 'react';



const TestimonialItem = () => {

    return (
        <div className="w-2/3 h-52 mx-auto flex justify-between shadow-2xl">
            <div className="flex-basis flex flex-col justify-center items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden mx-5">
                    <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX0n4Db1GuTNcjjlIQZ0Im-HFSVjky8UgGaQ&usqp=CAU" alt="Testimonial" />
                </div>
                <h1 className="text-xs">Michel Lone</h1>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown 

                printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    )
};


export default TestimonialItem;