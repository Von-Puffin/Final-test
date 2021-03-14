export class Post {
    quote_id: number;
    quote_text: string;
    said_by: string;
    
    constructor(quote_id: number, quote_text: string, said_by: string ) {
        this.quote_id = quote_id;
        this.quote_text = quote_text;
        this.said_by = said_by;
    }
  }
  //the model of what a post should be