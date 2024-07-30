import React, { useState } from 'react';
import '../styles/uploadpost.css';
import assets from '@/assets/assets';

const Tweets = () => (
   <div className='w-[30vw] h-fit bg-[#243041] flex items-center justify-center flex-col rounded-lg p-8 mt-6'>
      <form action="" className='w-full flex items-center justify-center flex-col gap-8'>
         <input type="text" placeholder='Enter Your Full Name' required
            className='w-full h-16 p-5 rounded-lg outline-none bg-inputBGLight text-xl text-white' />
         <textarea name="" id="" placeholder='Whats about your post ?'
            className='w-full h-[100px] p-5 rounded-lg outline-none bg-inputBGLight text-xl text-white resize-none' required>
         </textarea>
         <button type="submit" className='w-full h-12 bg-white rounded-lg text-black text-lg font-semibold'>Upload</button>
      </form>
   </div>
);

const ImagePost = () => {
   const [image, setImage] = useState(null);
   const fileInputRef = React.useRef(null);

   const handleDrop = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const files = event.dataTransfer.files;
      if (files && files[0]) {
         setImage(URL.createObjectURL(files[0]));
      }
   };

   const handleDragOver = (event) => {
      event.preventDefault();
      event.stopPropagation();
   };

   const handleClick = () => {
      if (fileInputRef.current) {
         fileInputRef.current.click();
      }
   };

   const handleFileChange = (event) => {
      const files = event.target.files;
      if (files && files[0]) {
         setImage(URL.createObjectURL(files[0]));
      }
   };

   return (
      <div className='w-[30vw] h-fit bg-[#243041] flex items-center justify-center flex-col rounded-lg p-8 mt-6'>
         <form action="" className='w-full flex items-center justify-center flex-col gap-8'>
            <input type="text" placeholder='Enter Your Full Name' required
               className='w-full h-16 p-5 rounded-lg outline-none bg-inputBGLight text-xl text-white' />
            <div
               className='w-full h-fit p-5 border-2 border-dashed border-white rounded-lg flex items-center justify-center text-white text-xl cursor-pointer'
               onDrop={handleDrop}
               onDragOver={handleDragOver}
               onClick={handleClick}
            >
               {image ? (
                  <img src={image} alt="Dropped" className='w-full h-full object-contain rounded-lg'/>
               ) : (
                  <span>Drop Image Here</span>
               )}
            </div>
            <input
               type="file"
               ref={fileInputRef}
               onChange={handleFileChange}
               className='hidden'
            />
            <textarea name="" id="" placeholder='Whats about your post ?'
               className='w-full h-[100px] p-5 rounded-lg outline-none bg-inputBGLight text-xl text-white resize-none' required>
            </textarea>
            <button type="submit" className='w-full h-12 bg-white rounded-lg text-black text-lg font-semibold'>Upload</button>
         </form>
      </div>
   );
};

export default function TabbedComponents() {
   const [activeTab, setActiveTab] = useState('');

   const tabs = [
      { key: 'tweets', title: 'Tweets', imgSrc: assets.tweets, content: <Tweets /> },
      { key: 'imgPost', title: 'Image Post', imgSrc: assets.imgPost, content: <ImagePost /> },
   ];

   return (
      <div className="flex w-[30vw] flex-col items-center justify-center mx-2 my-2 text-black">
         <div className="flex w-[30vw] items-center justify-between bg-cardBgLightmode text-white gap-10 p-4 rounded-lg">
            {tabs.map(tab => (
               <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`p-2 ${activeTab === tab.key ? 'border-b-3 border-white' : ''}`}
               >
                  <img className='w-7' src={tab.imgSrc} alt={tab.title} />
               </button>
            ))}
            <div className="w-fit h-fit text-xl font-medium">
               <h1>What's on your mind?</h1>
            </div>
         </div>
         <div className="w-fit h-fit">
            {tabs.find(tab => tab.key === activeTab)?.content}
         </div>
      </div>
   );
}
