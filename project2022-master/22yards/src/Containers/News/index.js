import React,{useEffect, useState} from "react";
import './index.css'
import SingleNewsCard from "./components/newsCard";
import { useDispatch, useSelector } from 'react-redux';
import { GetNews } from "../../redux/actions/news";

const temp=
[
    {
        "title": "Langer’s future in jeopardy after meltdown",
        "link": "https://www.news.com.au/sport/cricket/justin-langers-future-as-australian-coach-in-jeopardy-after-meltdown/news-story/c07d9160e16e9ba7d2d0b65496e1acd0",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "Four days after being inducted in the Australian Cricket Hall of Fame, Justin Langer’s role as national men’s coach looks to be in serious jeopardy.Cricket: Tom Morris joins the Fox Sports News desk to discuss Justin Langer's contract situation with Cricket Australia.Cricket: Tom Morris joins the Fox Sports News desk to discuss Justin Langer's contract situation with Cricket Australia.Cricket: Tom Morris joins the Fox Sports News desk to discuss Justin Langer's contract situation with Cricket Australia.Cricket: Tom Morris joins the Fox Sports News desk to discuss Justin Langer's contract situation with Cricket Australia.Cricket: Tom Morris joins the Fox Sports News desk to discuss Justin Langer's contract situation with Cricket Australia.Cricket: Tom Morris joins the Fox Sports News desk to discuss Justin Langer's contract situation with Cricket Australia.",
        "content": null,
        "pubDate": "2022-01-31 11:07:00",
        "full_description": "Four days after being inducted in the Australian Cricket Hall of Fame, Justin Langer’s role as national men’s coach looks to be in serious jeopardy. Langer, whose four-year coaching contract expires in June, suggested he wasn’t “on edge” about his position amid rumblings he still doesn’t have the full support of players or senior management. He expected his future to be sorted following planned talks with Cricket Australia. Watch the CommBank Women‘s Ashes Series on Kayo. Every Test, T20 & ODI Live & On-Demand. New to Kayo? Start your free trial now > But on Monday evening, reports emerged that Langer had been informed he might need to reapply for his job, much to the West Australian’s dismay. Foxsports.com.au reported that Langer reacted angrily when the possibility of him reapplying for the coaching role was raised by CA chief executive Nick Hockley and head of performance Ben Oliver during a heated meeting on Friday morning. According to the News Corp report, Langer is refusing to accept anything less than a full contract renewal, arguing his record warrants another multi-year deal. The CA board is reportedly uncertain over Langer’s reappointment. “Justin is contracted as Head Coach through to the middle of this year and we have consistently maintained discussions around the future of the role would commence following the conclusion of the men’s Ashes Series,” a CA spokesman said. “We have no comment about those confidential discussions.” Langer took over from Darren Lehmann as Australia’s head coach in 2018 following the Cape Town ball-tampering saga. In 2019, he and newly-elected Test captain Tim Paine helped Australia retain the Ashes in England for the first time in 18 years. But after losing the Border-Gavaskar Trophy on home soil twice in three years, reports emerged that Langer’s intensity was wearing thin with the players. Leaks emerged from the dressing room about their unhappiness with his coaching style and the cracks remained during horror white-ball tours of the West Indies and Bangladesh last year. A crisis meeting between CA chiefs and senior players was needed to address the issues between players and coach, sparking suggestions Langer was in danger of not having his contract renewed. The former Australian Test opener has since taken a step back and delegated more responsibility to his support staff, which has seemingly helped improve the team’s performance. Over the past couple of months, Australia has claimed its maiden T20 World Cup title and comprehensively won a home Ashes series 4-0. However, Australian Test captain Pat Cummins failed to publicly endorse Langer as coach after retaining the urn. “I think we’ll sit down all together after this series, or whenever his tenure is up and his contract is up for renewal, in a few months we’ll visit that then,” Cummins said when asked about Langer’s position. “(Langer) has been great. He’s certainly still head coach, but I think the environment that he creates not only for the players, but the coaches around him, really empowers them. “You’ve seen (batting coach) Michael Di Venuto really take charge of the batting, (assistant coach) Andrew McDonald take charge of the bowling. It’s just really good, clear roles for everyone in the team. “It’s in some ways taking a step back and letting the players really dictate the environment they want. “It worked incredibly well over in the World Cup, and he has huge credit to do with that, and hopefully it continues for this summer. He’s been great so far.” Last month, Oliver flagged that players would be among those consulted on whether Langer should have his contract renewed. Langer, who has received strong backing from a raft of former Australian cricket greats, recently suggested Australia’s on-field successes should count for something. “Imagine if a Wallabies coach won the Bledisloe Cup and then the World Cup in six months,” he told 6PR last week. “That’s the frustration of it. I wish I could tell you (why there is external noise). That’s the truth. I can only be judged on where Australian cricket was when I took over.” On Thursday, Langer was inducted into the Australian Cricket Hall of Fame – he represented Australia in 105 Tests, scoring 7696 runs and 23 centuries. “Justin’s record as a player speaks for itself,” Australian Cricketers’ Association chief executive Todd Greenberg said in a statement. “His record as an opener underpinned one of the most successful eras of Australian cricket. And his influence on the game has extended beyond his playing career – firstly through his commitment to the betterment of Western Australian cricket which is almost unparalleled, right through to the national team set-up which has convincingly held the Ashes on the back of winning the T20 World Cup for the first time.” - with NCA NewsWire Ashes hero and T20 World Cup champion Mitchell Starc still hasn’t forgotten what Shane Warne said at the start of the summer. A host of Big Bash stars are officially out of contract but Glenn Maxwell isn’t and continues to show his big money worth. The only negative coming from the last-gasp draw between Australia and England in Canberra is the lack of Test matches on the calendar.",
        "image_url": null,
        "source_id": "news"
    },
    {
        "title": "England all-rounder Tim Bresnan announces retirement from all forms of cricket",
        "link": "https://www.indiatvnews.com/sports/cricket/england-all-rounder-tim-bresnan-announces-retirement-from-all-forms-of-cricket-2022-01-31-757259",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "England all-rounder Tim Bresnan has announced his retirement from all forms of cricket at the age 36. The retirement news came via his county side Warwickshire's statement on Monday.",
        "content": null,
        "pubDate": "2022-01-31 10:55:38",
        "full_description": "England all-rounder Tim Bresnan has announced his retirement from all forms of cricket at the age 36. The retirement news came via his county side Warwickshire's statement on Monday. The 36-year-old now ends his 20-year cricketing career which saw him represent England on 142 occasions across all formats, including 23 Test caps. Bresnan was a member in England winning the 2010/11 Ashes in Australia and the T20 World Cup 2010 trophy in the West Indies. \"This has been an incredibly tough decision, but after returning to winter training I feel that this is the right time. I have continued to work hard throughout the off-season to prepare for my 21st professional year, but deep down I feel I can't reach the high standards that I set myself and my teammates. The hunger and enthusiasm that I have for the game I love will never leave me, but whilst my head is willing to tackle the 2022 season, my body is not,\" said Bresnan in a statement. In the domestic arena, Bresnan played for his home county of Yorkshire from 2001 to 2019 before spending two seasons at Warwickshire which culminated in helping them claim an eighth County Championship title last year. Overall, in first-class cricket, Bresnan amassed 7,138 runs, including seven centuries and scalped 575 wickets comprising nine five-wicket hauls. \"I will always look back at my career with immense pride and it's been an absolute honour to represent Warwickshire, my home county and country. Growing up I never would have believed how lucky I was to play with and against some of the finest cricketers to grace the game. I've been incredibly fortunate to represent England and Yorkshire and those memories will never leave me. The opportunity to wear the Three Lions is something that should never be taken for granted and I'm proud to have played a very small part in our country's storied history,\" added Bresnan. Warwickshire director of cricket Paul Farbrace said Bresnan had an astounding career and was a marvellous servant of the game. \"His performances for the Club have been exemplary and the impact he made on that final day against Somerset will be something that no Bear will ever forget. During his international career, Tim rose to the occasion when his country needed him and his achievements on the biggest stage show how talented and driven, he is. \"Knowing when to retire is an incredibly difficult decision for every professional sports man and woman and I know how much time and thought Tim would have made to reach this conclusion. Tim has certainly made his mark on this Club and his impact will be missed. We will look to replace him on and off-the-field, whilst welcoming back with open arms when he returns to Edgbaston.\"",
        "image_url": null,
        "source_id": "indiatvnews"
    },
    {
        "title": "Contract fallout: Langer’s future hanging by a thread",
        "link": "https://www.cairnspost.com.au/sport/cricket/cricket-justin-langers-future-as-australian-coach-is-hanging-by-a-thread-after-a-fallout-over-the-length-of-his-new-deal/news-story/6d2780b79bcd5e976e86c215fd66cd1c",
        "keywords": [
            "Cricket news and galleries",
            "Sport news and galleries"
        ],
        "creator": null,
        "video_url": null,
        "description": "Justin Langer’s future as Australian cricket coach is hanging by a thread after a fallout over the length of his new deal.",
        "content": null,
        "pubDate": "2022-01-31 10:21:00",
        "full_description": null,
        "image_url": null,
        "source_id": "cairnspost"
    },
    {
        "title": "Ex-England allrounder Bresnan calls time",
        "link": "https://thewest.com.au/sport/cricket/ex-england-allrounder-bresnan-calls-time-c-5514657",
        "keywords": null,
        "creator": [
            "AAP"
        ],
        "video_url": null,
        "description": "Tim Bresnan, a member of England's 2010-11 and 2013 Ashes-winning squads, has announced his retirement from cricket.",
        "content": null,
        "pubDate": "2022-01-31 10:12:16",
        "full_description": null,
        "image_url": "https://images.thewest.com.au/publication/C-5514657/8557739baf51da0af3e831d1a027273f4f3c861b-16x9-x0y75w800h450.jpg",
        "source_id": "thewest"
    },
    {
        "title": "Ex-England allrounder Bresnan calls time",
        "link": "https://www.perthnow.com.au/sport/cricket/ex-england-allrounder-bresnan-calls-time-c-5514650",
        "keywords": null,
        "creator": [
            "AAP"
        ],
        "video_url": null,
        "description": "Tim Bresnan, a member of England's 2010-11 and 2013 Ashes-winning squads, has announced his retirement from cricket.",
        "content": null,
        "pubDate": "2022-01-31 10:11:57",
        "full_description": "Former England allrounder Tim Bresnan has announced his retirement. Bresnan, 36, played 142 times for England, including 23 Tests, and was part of the Ashes-winning squads in 2010-11 and 2013. He was also a member of the England side that won the 2010 World T20 trophy for the first time. He amassed 7138 runs and 575 wickets in a 20-year first-class playing career, the bulk of it with Yorkshire, who he helped win back-to-back County Championship titles in 2014 and 2015. He joined Warwickshire in 2020 on a two-year deal and last season helped them win the County Championship and Bob Willis Trophy double. \"This has been an incredibly tough decision but, after returning to winter training I feel that this is the right time,\" Bresnan said.",
        "image_url": "https://images.perthnow.com.au/publication/C-5514650/8557739baf51da0af3e831d1a027273f4f3c861b-16x9-x0y75w800h450.jpg",
        "source_id": "perthnow"
    },
    {
        "title": "\"I'm Not Married To Him\": Harbhajan Singh On Rapport With MS Dhoni",
        "link": "https://sports.ndtv.com/cricket/im-not-married-to-him-harbhajan-singh-on-rapport-with-ms-dhoni-2739744",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "Harbhajan Singh has played a lot of cricket under MS Dhoni and was even the member of India's two World Cup-winning squads - 2007 T20 World Cup and the 2011 ODI World Cup.",
        "content": null,
        "pubDate": "2022-01-31 10:07:59",
        "full_description": "Former India cricketer Harbhajan Singh gave an epic answer when he was asked about his rapport with former India captain MS Dhoni. \"Very nice. I am not married to him!\" Harbhajan told Cricketnext.com . Harbhajan has played a lot of cricket under Dhoni and was even the member of India's two World Cup-winning squads - 2007 T20 World Cup and the 2011 ODI World Cup. To be precise, Harbhajan has played 31 Tests, 77 ODIs and 25 T20Is under Dhoni's leadership. The off-spinner, however, slowly started to lose his spot to Ravichandran Ashwin post the 2011 World Cup. \"See, everyone interprets a quote differently. I just wanted to convey that a lot of things could have been better post 2012,\" Harbhajan said. The off-spinner, who announced his retirement in December last year, said he still doesn't why the ODI World Cup-winning team of 2011 did not play together much after their triumph. \"(Virender) Sehwag, me, Yuvraj (Singh), (Gautam) Gambhir could have retired playing for Indian team since all of them were active in IPL as well. It is ironical that the Champions of the 2011 team never played together again! Why? Only few of them played in 2015 World Cup, why?\" he asked. Harbhajan said he doesn't have any complains against Dhoni and referred the legendary wicketkeeper-batter as a \"good friend\". \"I have no complaints against MS. In fact, he has been a good friend all these years,\" Harbhajan added. Promoted The former off-spinner who is among the four Indians to have taken more than 400 Test wickets, said the selectors at that time \"did not do justice\" to their roles \"I have complaint to the BCCI, the sarkar (government) of that time. I call BCCI as sarkar. The selectors of that time didn't do justice to their roles. They didn't allow the team to be united. What was the point of bringing in new guys when the greats were still around and delivering? I once confronted the selectors on this and their reply was it wasn't in their hands and then I asked why they are the selectors, then?\" he added.",
        "image_url": "https://c.ndtvimg.com/2021-12/17ahuhfg_harbhajan-dhoni-afp_625x300_31_December_21.jpg?im=FaceCrop,algorithm=dnn,width=240,height=180",
        "source_id": "ndtv"
    },
    {
        "title": "Narrow win for St Marys in T20 thriller against Dunsborough",
        "link": "https://www.busseltonmail.com.au/story/7601951/narrow-win-for-st-marys-in-t20-thriller-against-dunsborough/?src=rss",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "ST MARYS were 1-run winners over Dunsborough in one of the most exciting A-Grade T20 match-ups in the history of the Busselton-Margaret River Cricket Association.",
        "content": null,
        "pubDate": "2022-01-31 10:03:00",
        "full_description": null,
        "image_url": "https://transform.newsnow.io/transform/v1/crop/frm/wXRNchq95bZhpeysFncAhm/167d2a61-1005-4e05-8d53-c554666f5b53.jpeg/r0_194_1968_1303_w600_h338_fmax.jpg",
        "source_id": "busseltonmail"
    },
    {
        "title": "Former England all-rounder Bresnan retires",
        "link": "https://www.skysports.com/cricket/news/12040/12529346/tim-bresnan-former-england-all-rounder-announces-retirement-from-cricket",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "Former England all-rounder Tim Bresnan has announced his retirement from all forms of cricket, his county side Warwickshire have confirmed",
        "content": null,
        "pubDate": "2022-01-31 09:10:00",
        "full_description": "Last Updated: 31/01/22 9:29am Former England all-rounder Tim Bresnan has announced his retirement from all forms of cricket, his county side Warwickshire have confirmed The 36-year-old brings down the curtain on a 20-year career which saw him represent England on 142 occasions in all forms of the game, including 23 Test caps, and was part of both the 2010/11 Ashes series win in Australia and the 2010 World Twenty20 triumph. At domestic level, he played for his home county of Yorkshire from 2001 to 2019 before ending with two seasons at Warwickshire which culminated in helping them claim an eighth County Championship title last year. But, having been all set to carry on in 2022, Bresnan has now decided to call time on his playing days. 𝗡𝗘𝗪𝗦 | 𝗧𝗶𝗺 𝗕𝗿𝗲𝘀𝗻𝗮𝗻 𝗮𝗻𝗻𝗼𝘂𝗻𝗰𝗲𝘀 𝗿𝗲𝘁𝗶𝗿𝗲𝗺𝗲𝗻𝘁 💬 \"I will always look back at my career with immense pride and it’s been an absolute honour to represent Warwickshire, my home county and country.\" 📝 https://t.co/SaeoZd8Wsy 🐻 #YouBears pic.twitter.com/z1Nu4ijT1F \"This has been an incredibly tough decision, but after returning to winter training I feel that this is the right time,\" Pontefract-born Bresnan said. \"I have continued to work hard throughout the off-season to prepare for my 21st professional year, but deep down I feel I can't reach the high standards that I set myself and my teammates. \"The hunger and enthusiasm that I have for the game I love will never leave me, but whilst my head is willing to tackle the 2022 season, my body is not. \"I will always look back at my career with immense pride and it's been an absolute honour to represent Warwickshire, my home county and country. Growing up I never would have believed how lucky I was to play with and against some of the finest cricketers to grace the game.\" More to follow... This is a breaking news story that is being updated and more details will be published shortly. Please refresh this page for the latest updates. Sky Sports brings you live updates as they happen. Get breaking sports news, analysis, exclusive interviews, replays and highlights. Sky Sports is your trusted source for breaking sports news headlines and live updates. Watch live coverage of your favourite sports: Football, F1, Boxing, Cricket, Golf, Tennis, Rugby League, Rugby Union, NFL, Darts, Netball and get the latest transfers news, results, scores and more. Visit skysports.com or the Sky Sports App for all the breaking sports news headlines. You can receive push notifications from the Sky Sports app for the latest news from your favourite sports and you can also follow @SkySportsNews on Twitter to get the latest updates.",
        "image_url": "https://e0.365dm.com/22/01/1920x1080/skysports-tim-bresnan-warwickshire_5657625.jpg?20220131091628",
        "source_id": "skysports"
    },
    {
        "title": "Langer may need to reapply for top job",
        "link": "https://www.cairnspost.com.au/sport/cricket/langer-may-need-to-reapply-for-top-job/video/52af3f9533e4efe1e876ebb03ba87ee6",
        "keywords": [
            "Cricket news and galleries"
        ],
        "creator": null,
        "video_url": null,
        "description": "Cricket: Tom Morris joins the Fox Sports News desk to discuss Justin Langer's contract situation with Cricket Australia.Cricket: Tom Morris joins the Fox Sports News desk to discuss Justin Langer's contract situation with Cricket Australia.Cricket: Tom Morris joins the Fox Sports News desk to discuss Justin Langer's contract situation with Cricket Australia.Cricket: Tom Morris joins the Fox Sports News desk to discuss Justin Langer's contract situation with Cricket Australia.Cricket: Tom Morris joins the Fox Sports News desk to discuss Justin Langer's contract situation with Cricket Australia.Cricket: Tom Morris joins the Fox Sports News desk to discuss Justin Langer's contract situation with Cricket Australia.Cricket: Tom Morris joins the Fox Sports News desk to discuss Justin Langer's contract situation with Cricket Australia.",
        "content": null,
        "pubDate": "2022-01-31 08:44:09",
        "full_description": null,
        "image_url": null,
        "source_id": "cairnspost"
    },
    {
        "title": "Langer may need to reapply for top job",
        "link": "https://www.news.com.au/sport/cricket/langer-may-need-to-reapply-for-top-job/video/52af3f9533e4efe1e876ebb03ba87ee6",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "Cricket: Tom Morris joins the Fox Sports News desk to discuss Justin Langer's contract situation with Cricket Australia.",
        "content": null,
        "pubDate": "2022-01-31 08:44:09",
        "full_description": null,
        "image_url": null,
        "source_id": "news"
    }
]

export default function RightFooter(){
    const [currentFetchPage,setCurrentFetchPage]=useState(2)
    const dispatch=useDispatch()
    const articlesList=useSelector((state)=>state.newsArticlesReducer.newsArticles)
    
    //Coponent Initial Mount
    useEffect(()=>{
        dispatch(GetNews(1))
    },[])
    
    function loadMoreArticles(){
        dispatch(GetNews(currentFetchPage))
        setCurrentFetchPage(currentFetchPage+1)
    }
    return(
        <div className="right-footer " style={{width:"100%"}}>
                {/* {
              
                    temp.map((each)=>(
                       <SingleNewsCard news={each}/>
                    ))
                }  */}
                {
                    articlesList.length!==0 && 
                    articlesList.map((each,index)=>(
                       <SingleNewsCard news={each} key={index}/>
                    ))
                } 
                {
                    articlesList.length===0 &&
                    <h1>No More Articles</h1>
                } 
               
                <button onClick={loadMoreArticles}>Load More</button>
        </div>
    )
}