import logo from './logo.svg';
import './App.css';
import Birthday from './Birthday';
import bbgname from './images/bbgname2.png';
import biss2 from './images/bis2.jpg';
import biss3 from './images/bis3.png';
import biss4 from './images/bis4.jpg';
import biss5 from './images/bis5.jpg';


function App() {
  const data = [biss2,biss3,biss4,biss5];
  
  const wishes = ['Your birthday is the first day of another 365-day journey. Be the shining thread in the beautiful tapestry of the world to make this year the best ever. Enjoy the ride.','Count your life by smiles, not tears. Count your age by friends, not years. Happy birthday!','Happy birthday! I hope all your birthday wishes and dreams come true.','A wish for you on your birthday, whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be fulfilled on your birthday and always. Happy birthday!','Another adventure filled year awaits you. Welcome it by celebrating your birthday with pomp and splendor. Wishing you a very happy and fun-filled birthday!','May the joy that you have spread in the past come back to you on this day. Wishing you a very happy birthday!','Happy birthday! Your life is just about to pick up speed and blast off into the stratosphere. Wear a seat belt and be sure to enjoy the journey. Happy birthday!','This birthday, I wish you abundant happiness and love. May all your dreams turn into reality and may lady luck visit your home today. Happy birthday to one of the sweetest people I’ve ever known.','May you be gifted with life’s biggest joys and never-ending bliss. After all, you yourself are a gift to earth, so you deserve the best. Happy birthday.','Count not the candles…see the lights they give. Count not the years, but the life you live. Wishing you a wonderful time ahead. Happy birthday.','Forget the past; look forward to the future, for the best things are yet to come.','Birthdays are a new start, a fresh beginning and a time to pursue new endeavors with new goals. Move forward with confidence and courage. You are a very special person. May today and all of your days be amazing!','Your birthday is the first day of another 365-day journey. Be the shining thread in the beautiful tapestry of the world to make this year the best ever. Enjoy the ride.','Be happy! Today is the day you were brought into this world to be a blessing and inspiration to the people around you! You are a wonderful person! May you be given more birthdays to fulfill all of your dreams!','Happy Birthday! You know, you don’t look that old. But then, you don’t look that young, either.','Happy birthday to someone who is smart, gorgeous, funny and reminds me a lot of myself… from one fabulous chick to another!','To quote Shakespeare: ‘Party thine ass off!’','Warmest wishes for a very happy '];
  return (
    
    <>
    <div className='top'>
      <div>
        <img src={bbgname} alt="sorry" />
      </div>
    </div>
     <div className="container">
      {
        data.map((elements, index)=>{
          console.log('elements :'+index);
          let wish = wishes[index];
          console.log('wish :'+wish);
          if(wish == undefined ){
            var n = parseInt(index) - 17;
            console.log('n : '+n);
              wish = wishes[n];
          }
           return<Birthday imageUrl={elements}  ind={index} wishesProps={wish}/>
        })
      }
      </div>
    </>
  );
}


export default App;
