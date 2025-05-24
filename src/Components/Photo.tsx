import photo from '../assets/photo.png'; 

export default function Photo() {
  return (
    <div className='max-w-100'>
      <img src={photo} alt="MyProfile" />
    </div>
  );
}