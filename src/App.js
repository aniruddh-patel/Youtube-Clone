import './App.css';
import Header from './components/Header.js';
import Videoframe from  './components/Videoframe';
import Choose from './components/Choose';
import Sidebarcomponent from './components/Sidebarcomponent';

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
import thumbnail1 from './thumbnail/thumbnail1.png'
import thumbnail2 from './thumbnail/thumbnail2.png'
import thumbnail3 from './thumbnail/thumbnail3.png'
import thumbnail4 from './thumbnail/thumbnail4.png'
import thumbnail5 from './thumbnail/thumbnail5.png'
import thumbnail6 from './thumbnail/thumbnail6.png'
import thumbnail7 from './thumbnail/thumbnail7.png'
/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
import home from './images/sidebaricon/home.png'
import shorts from './images/sidebaricon/shorts.png'
import subscribe from './images/sidebaricon/subscribe.png'
import library from './images/sidebaricon/library.png'
import history from './images/sidebaricon/history.png'
import playbutton from './images/sidebaricon/play-button.png'
import watchlater from './images/sidebaricon/watch-later.png'
import like from './images/sidebaricon/like.png'
import trending from './images/sidebaricon/trending.png'
import bag from './images/sidebaricon/bag.png'
import music from './images/sidebaricon/music.png'
import movie from './images/sidebaricon/movie.png'
import live from './images/sidebaricon/live.png'
import gaming from './images/sidebaricon/gaming.png'
import news from './images/sidebaricon/news.png'
import sports from './images/sidebaricon/sports.png'
import learning from './images/sidebaricon/learning.png'
import fashion from './images/sidebaricon/fashion.png'
import ytpremium from './images/sidebaricon/yt-premium.png'
import studio from './images/sidebaricon/studio.png'
import ytmusic from './images/sidebaricon/yt-music.png'
import ytkids from './images/sidebaricon/yt-kids.png'
import setting from './images/sidebaricon/setting.png'
import report from './images/sidebaricon/report.png'
import help from './images/sidebaricon/help.png'
import feedback from './images/sidebaricon/feedback.png'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="sidebar">
          <div className='inner-sidebar'>
            <Sidebarcomponent name="Home" logo={home}/>
            <Sidebarcomponent name="Shorts" logo={shorts}/>
            <Sidebarcomponent name="Subscriptions" logo={subscribe}/>
            <hr className='divider'/>
            <Sidebarcomponent name="Library" logo={library}/>
            <Sidebarcomponent name="History" logo={history}/>
            <Sidebarcomponent name="Your videos" logo={watchlater}/>
            <Sidebarcomponent name="Watch later" logo={like}/>
            <Sidebarcomponent name="Liked videos" logo={playbutton}/>
            <hr className='divider'/>
            <Sidebarcomponent name="Trending" logo={trending}/>
            <Sidebarcomponent name="Shopping" logo={bag}/>
            <Sidebarcomponent name="Music" logo={music}/>
            <Sidebarcomponent name="Movies" logo={movie}/>
            <Sidebarcomponent name="Live" logo={live}/>
            <Sidebarcomponent name="Gaming" logo={gaming}/>
            <Sidebarcomponent name="News" logo={news}/>
            <Sidebarcomponent name="Sports" logo={sports}/>
            <Sidebarcomponent name="Learning" logo={learning}/>
            <Sidebarcomponent name="Fashion & Beauty" logo={fashion}/>
            <hr className='divider'/>
            <Sidebarcomponent name="Youtube Premium" logo={ytpremium}/>
            <Sidebarcomponent name="Youtube Studio" logo={studio}/>
            <Sidebarcomponent name="Youtube Music" logo={ytmusic}/>
            <Sidebarcomponent name="Youtube Kids" logo={ytkids}/>
            <hr className='divider'/>
            <Sidebarcomponent name="Settings" logo={setting}/>
            <Sidebarcomponent name="Report history" logo={report}/>
            <Sidebarcomponent name="Help" logo={help}/>
            <Sidebarcomponent name="Send feedback" logo={feedback}/>
            <hr className='divider'/>
            <div className='copyright'>
              <li>About</li>
              <li>Press</li>
              <li>Copyright</li>
              <li>Contact us</li>
              <li>Creators</li>
              <li>Advertise</li>
              <li>Developers</li>
              <br /><br />
              <li>Terms</li>
              <li>Privacy</li>
              <li>Policy & Safety</li>
              <li>How YouTube works</li>
              <li>Test new features</li>
              <br /><br />
              <li>2023 Google LLC</li>
            </div>
          </div>
      </div>
      <div className="content">
          <div className="subheader">
            <Choose option="All" />
            <Choose option="Gaming" />
            <Choose option="Sony liv" />
            <Choose option="Entertainment" />
            <Choose option="Cartoon" />
            <Choose option="Fashion" />
            <Choose option="CID" />
            <Choose option="Live" />
            <Choose option="News" />
            <Choose option="Comedy" />
            <Choose option="Education" />
            <Choose option="Music" />
            <Choose option="Funny Video" />
          </div>
          <div className="main">
              <Videoframe title='How to make templates || Grapgic designer' channelname='Graphics art' viewtime='15M views. 3Year ago' thumbnail={ thumbnail1 } />
              <Videoframe title='How to make youtube thumbnail' channelname='Creator' viewtime='5M views. 3Year ago' thumbnail={ thumbnail2 }/>
              <Videoframe title='Acer nitro 5 review || i5 12500h with rtx 3050' channelname='Venom tech' viewtime='5M views. 3Year ago' thumbnail={ thumbnail3 }/>
              <Videoframe title='DevOps full course || simplified learning' channelname='Simplified Leaning' viewtime='5K views. 5Year ago' thumbnail={ thumbnail4 }/>
              <Videoframe title='javascript full course || one shot Javascript' channelname='Code with Harry' viewtime='100k views. 3Month ago' thumbnail={ thumbnail5 }/>
              <Videoframe title='Richest person in the world!' channelname='Explore World!' viewtime='5M views. 3Year ago'  thumbnail={ thumbnail6 }/>
              <Videoframe title='Royal Enfield history || evolution of Royal Enfield' channelname='Royal Enfield' viewtime='5.1K views. 3Day ago' thumbnail={ thumbnail7 }/>
              <Videoframe title='How to make templates || Grapgic designer' channelname='Graphics art' viewtime='15M views. 3Year ago' thumbnail={ thumbnail1 } />
              <Videoframe title='How to make youtube thumbnail' channelname='Creator' viewtime='5M views. 3Year ago' thumbnail={ thumbnail2 }/>
              <Videoframe title='Acer nitro 5 review || i5 12500h with rtx 3050' channelname='Venom tech' viewtime='5M views. 3Year ago' thumbnail={ thumbnail3 }/>
              <Videoframe title='DevOps full course || simplified learning' channelname='Simplified Leaning' viewtime='5K views. 5Year ago' thumbnail={ thumbnail4 }/>
              <Videoframe title='javascript full course || one shot Javascript' channelname='Code with Harry' viewtime='100k views. 3Month ago' thumbnail={ thumbnail5 }/>
              <Videoframe title='Richest person in the world!' channelname='Explore World!' viewtime='5M views. 3Year ago'  thumbnail={ thumbnail6 }/>
              <Videoframe title='Royal Enfield history || evolution of Royal Enfield' channelname='Royal Enfield' viewtime='5.1K views. 3Day ago' thumbnail={ thumbnail7 }/>
              <Videoframe title='DevOps full course || simplified learning' channelname='Simplified Leaning' viewtime='5K views. 5Year ago' thumbnail={ thumbnail4 }/>
              <Videoframe title='javascript full course || one shot Javascript' channelname='Code with Harry' viewtime='100k views. 3Month ago' thumbnail={ thumbnail5 }/>
          </div>
      </div>
      
    </div>
  );
}

export default App;
