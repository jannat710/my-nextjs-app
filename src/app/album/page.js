import Image from 'next/image';
import React from 'react';

const AlbumPage = () => {
    return (
        <div>
            <h1>Using Image Component</h1>
            <Image 
            src='https://images.pexels.com/photos/863963/pexels-photo-863963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            width={500}
            height={500}
            alt='next logo'/>
            <h1>Using Img Tag</h1>
            <img 
            src='https://images.pexels.com/photos/863963/pexels-photo-863963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            width='500px'
            height='500px'
            alt='next logo'/>
        </div>
    );
};

export default AlbumPage;