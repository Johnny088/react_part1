import { useState } from 'react';
import { NewsItem } from './components/news';
import { Sprite } from './components/shape';
import './App.css';
const newsItems = [
  {
    img: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1TRPmL.img?w=768&h=432&m=6',
    text: "What happened on Ole Miss's controversial final-play Hail Mary? Did Miami commit pass interference?",
    link: 'https://www.msn.com/en-us/sports/other/what-happened-on-ole-miss-s-controversial-final-play-hail-mary-did-miami-commit-pass-interference/ar-AA1TRIvB?ocid=msedgntp&pc=EDGEDSE&cvid=696119c3af4449248bd96ca42dd3155d&ei=33',
  },
  {
    img: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1TSEji.img?w=768&h=432&m=6',
    text: 'US economy added 50,000 jobs in December, capping off one of the weakest years of job gains in decades',
    link: 'https://www.msn.com/en-us/news/us/us-economy-added-50-000-jobs-in-december-capping-off-one-of-the-weakest-years-of-job-gains-in-decades/ar-AA1TSmly?ocid=msedgntp&pc=EDGEDSE&cvid=696119c3af4449248bd96ca42dd3155d&ei=47',
  },
  {
    img: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1TSkn2.img?w=768&h=432&m=6',
    text: 'Google adding an AI inbox, AI overviews to Gmail. Does anybody want this?',
    link: 'https://www.msn.com/en-us/news/technology/google-adding-an-ai-inbox-ai-overviews-to-gmail-does-anybody-want-this/ar-AA1TSoDy?ocid=msedgntp&pc=EDGEDSE&cvid=696119c3af4449248bd96ca42dd3155d&ei=55',
  },
  {
    img: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1T5xGc.img?w=800&h=435&q=60&m=2&f=jpg',
    text: '6 alternatives to the Toyota 4Runner',
    link: 'https://www.msn.com/en-us/autos/autos-suvs/6-alternatives-to-the-toyota-4runner/ss-AA1T5lAG?ocid=msedgntp&pc=EDGEDSE&cvid=69611cfe4b134c8ba19ce4ee0eca52ab&ei=33',
  },
  {
    img: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1TPZSa.img?w=768&h=512&m=6&x=488&y=90&s=398&d=94',
    text: 'Kamaru Usman breaks silence after Anthony Joshua video leak',
    link: 'https://www.msn.com/en-us/sports/nba/kamaru-usman-breaks-silence-after-anthony-joshua-video-leak/ar-AA1TQa1f?ocid=msedgntp&pc=EDGEDSE&cvid=69611cfe4b134c8ba19ce4ee0eca52ab&ei=40',
  },
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NewsItem
        image={newsItems[0].img}
        text={newsItems[0].text}
        link={newsItems[0].link}
      />
      <NewsItem
        image={newsItems[1].img}
        text={newsItems[1].text}
        link={newsItems[1].link}
      />
      <NewsItem
        image={newsItems[2].img}
        text={newsItems[2].text}
        link={newsItems[2].link}
      />
      <NewsItem
        image={newsItems[3].img}
        text={newsItems[3].text}
        link={newsItems[3].link}
      />
      <NewsItem
        image={newsItems[4].img}
        text={newsItems[4].text}
        link={newsItems[4].link}
      />
      <Sprite sizeWidth={100} sizeHeight={100} color={'yellow'} radius={50} />
      <Sprite sizeWidth={250} sizeHeight={200} color={'blue'} radius={0} />
      <Sprite sizeWidth={250} sizeHeight={250} color={'purple'} radius={0} />
      <Sprite sizeWidth={150} sizeHeight={150} color={'green'} radius={50} />
    </>
  );
}

export default App;
