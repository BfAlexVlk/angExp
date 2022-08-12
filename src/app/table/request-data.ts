  export interface Request{
    id:number;
    status: number;
    type: number;
    domainName:string;
    regNum:string;
    infoSystem: string;
    externalNetwork: string;
    internalNetwork:string;
    date:string;
  }

  /*
  
  [
  '{{repeat(5, 7)}}',
  {          
    id: '{{index()}}',   
    regNum: '{{lorem(1, "words")}}',
    externalNetwork: '{{lorem(1, "words")}}',
    internalNetwork: '{{lorem(1, "words")}}',
    status: '{{random(1, 2, 3)}}',  
    type: '{{random(1, 2, 3,4,5)}}',
    date: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    domainName: '{{lorem(1, "words")}}' 
  }
]
  
  
  
  */