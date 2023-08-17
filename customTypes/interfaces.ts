export interface Word {
  _id: string;
  word: string;
  meaning: string;
  createdTime: Date;
  isLearned: boolean;
  tag: string;
  color: string;
}
