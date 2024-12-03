import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type: String, required: true,
    validate: {
      validator: function (value) {
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value);
      },
      message: 'Password must be at least 8 characters long and include at least one letter, one number, and one special character.',
    },
  },
});

UserSchema.index({ username: 1 }, { unique: true });



export default mongoose.model('User', UserSchema);
