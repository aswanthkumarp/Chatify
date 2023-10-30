import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';
import loader from '../assets/loader.gif';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { setAvatarRoute } from '../utils/apiRoutes';

export default function SetAvatar() {
  const baseUrl = 'https://api.multiavatar.com/';
  const apiKey = 'sStA9LqFDUrZkG';
  const avatarCount = 4;
  const toastConfig = {
    position: 'top-left',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
  };
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!localStorage.getItem('chatify-user')) {
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const avatarRequests = Array.from(
          { length: avatarCount },
          (_, index) => {
            const avatarId = Math.floor(Math.random() * 10000000); // Random avatar ID
            return axios.get(`${baseUrl}${avatarId}?apikey=${apiKey}`);
          }
        );

        const responses = await Promise.all(avatarRequests);
        const avatarData = responses.map((response) => {
          const buffer = new Buffer(response.data);
          return buffer.toString('base64');
        });

        setAvatars(avatarData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching avatars:', error);
        setIsLoading(false);
        // Handle error toast or message
      }
    };

    fetchData();
  }, []);

  const setProfilePicture = async () => {
    if (selectedAvatar === undefined) {
      toast.error('Please select an avatar', toastConfig);
    } else {
      const user = localStorage.getItem('chatify-user');
    
  
      if (user) {
        try {
          const parsedUser = JSON.parse(user);
  
          if (parsedUser && typeof parsedUser === 'object' && Object.keys(parsedUser).length > 0) {
            const { data } = await axios.post(`${setAvatarRoute}/${parsedUser._id}`, {
              image: avatars[selectedAvatar],
            });

            if (data.isSet) {
              parsedUser.isAvatarImageSet = true;
              parsedUser.avatarImage = data.image;
              localStorage.setItem('chatify-user', JSON.stringify(parsedUser));
              navigate("/");
            } else {
              toast.error("Error setting avatar. Please try again.", toastConfig);
            }
          } else {
            toast.error('Invalid or empty user data found. Please log in.', toastConfig);
            // Handle invalid or empty user data in localStorage
          }
        } catch (error) {
          console.error('Error parsing or setting user data:', error);
          toast.error('Error parsing user data or setting avatar. Please try again.', toastConfig);
        }
      } else {
        toast.error('No user data found. Please log in.', toastConfig);
        // Handle scenario where 'chatify-user' data is not available
      }
    }
  };
  
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center flex-col gap-12 bg-[#d8dee9] h-screen w-screen">
          <img src={loader} alt='loader' className='w-full max-h-full' />
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col gap-12 bg-[#d8dee9] h-screen w-screen">
          <div className='title-container'>
            <h1 className='text-black font-bold text-2xl'>Pick an Avatar as your profile picture</h1>
          </div>
          <div className='flex gap-8'>
            {avatars.map((avatar, index) => {
              return (
                <div
                  className={`border-4 rounded-full w-24 h-24 flex justify-center items-center ${selectedAvatar === index ? 'border-[#4e0eff]' : 'border-transparent'}`}
                  key={index}
                  onClick={() => setSelectedAvatar(index)}
                >
                  <img
                    src={`data:image/svg+xml;base64,${avatar}`}
                    alt='avatar'
                  />
                </div>
              );
            })}
          </div>
          <button onClick={setProfilePicture} className='bg-[#4e0eff] text-white px-8 py-4 font-bold cursor-pointer rounded uppercase'>
            Set as Profile Picture
          </button>
          <ToastContainer />
        </div>
      )}
    </>
  );
}
