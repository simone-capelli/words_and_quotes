import { Schema, model, models } from 'mongoose';

const SampleSchema = new Schema({
  // if you want to reference to another model -> User
  /* creator: {
    type: Schema.Types.ObjectId,
    ref: 'User', 
  }, */
  sample: {
    type: String,
    required: [true, 'Sample is required.'],
  },
  description: {
    type: String,
    required: [true, 'Description is required.'],
  },
});

const Sample = models.Sample || model('Sample', SampleSchema);

export default Sample;
