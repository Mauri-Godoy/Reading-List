export class Book {
  book!: Data;
}

class Data {
  title!: string;
  pages?: number;
  genre!: string;
  cover!: string;
  year?: number;
  synopsis?: string;
  ISBN?: string;
  author!: Author;
}

class Author {
  name!: string;
  otherBooks?: string[];
}
