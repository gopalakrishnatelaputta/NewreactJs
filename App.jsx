import React from 'react';
import Movie from "./Movie"
//import gopal from "./images/gopal.jpg"

let data=
[

  {
    title:"Spiderman",
     img:"https://occ-0-3215-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRqlngo5XXwK2ZUmKxG9ICImdwTvWs3T1zVlW5ut-2w9iCuEkTaQKfdK8a2lcdEMz52r8c5iLDJ4Judr9KY_o4SmXhKgAarvFbs.jpg?r=f8a",
     description:"Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.",
     actors :"Akhsisiju",
  },
 

  {
  title:"Khushi",
   img:"https://occ-0-3215-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSzSuHjYOwEZPNwNmafElDgzwhVggEZiUPVbrHCVHJTFiZC17ii8r-WurP8akZQOYyz1-z8ohSit14ls_RnJL5nKL5026y9gErI.jpg?r=548",
   description : "Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.",
   actors :"VijayDevarakonda",
  },


  {
  title:"Raw",
   img:"https://occ-0-3215-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUfBoFJ9GGgUN9j2aXlD5JXGZJlwkl-Kwp3rbRdDPNCdPK8enVYjVyfJFgYVwj70gl6wFTlAOrU8FKV7Gwc04BKQ-0_UFyBoXsY.jpg?r=4b5",
   description : "Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.",
   actors :"Vijay Thalapathi",
  }
]








function App() {
    
  return (
   
    <section className="container" >
     {/* <Movie  image={data[0].img} title={data[0].title} description= {data[0].description} actors={data[0].actors}/> 
      <Movie image={data[1].img  } title={data[1].title} description= {data[1].description} actors={data[1].actors}/>
      <Movie image={data[2].img  } title={data[2].title} description= {data[2].description} actors={data[2].actors}/> */}
    Hello Gopala Krishna
     {data.map((eachObj,index)=>{
      console.log(eachObj);
      const {title,img,description,actors}=eachObj;
      return <Movie key={index} title={title} image={img} description={description} actors={actors}/>
     })}
    </section>
  );
};


export default App;

