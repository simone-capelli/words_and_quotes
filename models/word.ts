import { Schema, model, models } from 'mongoose';

const WordSchema = new Schema(
  {
    word: {
      type: String,
      required: [true, 'Word is required.'],
    },
    meaning: {
      type: String,
      default: '',
    },
    createdTime: {
      type: Date,
      default: Date.now,
    },
    isLearned: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      required: [true, 'Tag is required.'],
    },
    color: {
      type: String,
      default: '#0F96EF',
    },
  },
  { versionKey: false }
);

const Word = models.Word || model('Word', WordSchema);

export default Word;
