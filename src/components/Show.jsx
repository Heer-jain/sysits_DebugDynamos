import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Show = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const storedVideos = JSON.parse(localStorage.getItem('videos')) || [];
    setVideos(storedVideos);
  }, []);

  const handleLike = (id) => {
    const updatedVideos = videos.map(video => {
      if (video.id === id) {
        return { ...video, likes: video.likes + 1 };
      }
      return video;
    });
    setVideos(updatedVideos);
    localStorage.setItem('videos', JSON.stringify(updatedVideos));
  };

  const handleDelete = (id) => {
    const updatedVideos = videos.filter(video => video.id !== id);
    setVideos(updatedVideos);
    localStorage.setItem('videos', JSON.stringify(updatedVideos));
  };

  const addVideo = (newVideo) => {
    const updatedVideos = [...videos, { ...newVideo, id: Date.now(), likes: 0 }];
    setVideos(updatedVideos);
    localStorage.setItem('videos', JSON.stringify(updatedVideos));
  };

  return (
    <div>
      <VideoForm onAddVideo={addVideo} />
      <div className='flex flex-wrap gap-10 p-5'>
        {videos.map(video => (
          <VideoItem key={video.id} video={video} onLike={handleLike} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

const VideoItem = ({ video, onLike, onDelete }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px' }} className='space-y-5' >
      <video src={video.url} controls className='w-[30vw] h-[30vh]' />
      <p>Description: {video.description}</p>
      <div className='flex flex-row justify-between'>
        <button onClick={() => onLike(video.id)} className='flex flex-row'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg> {video.likes}
        </button>
        <button onClick={() => onDelete(video.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const VideoForm = ({ onAddVideo }) => {
  const [showForm, setShowForm] = useState(false);
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const url = reader.result;
        onAddVideo({ url, description });
        setFile(null);
        setDescription('');
        setShowForm(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Navbar />
      <h1 className='text-5xl font-bold m-5'>Fashion Show</h1>
      {showForm ? (
        <form onSubmit={handleSubmit} className='w-60 border border-black rounded-lg m-5 fixed right-5 bottom-5'>
          <input type="file" accept="video/*" onChange={(e) => setFile(e.target.files[0])} required className='border border-black rounded-md p-1 m-1 w-56'/>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required className='border border-black rounded-md p-1 m-1'></textarea>
          <button type="submit" className='bg-red-300 rounded-full py-1 px-3'>Add</button>
        </form>
      ) : (
        <button onClick={() => setShowForm(true)} className='rounded-full  bg-red-300 h-10 w-10 text-4xl fixed right-5 bottom-5'>+</button>
      )}
    </div>
  );
};

export default Show;
