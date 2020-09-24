// Import libraries
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

// Create schema
const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "user",
      enum: ["admin", "user"],
    },
    lists: [
      {
        type: Schema.Types.ObjectId,
        ref: "TodoList",
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

// Define model
const User = mongoose.model("User", UserSchema);

// Export model
module.exports = User;

// Insert resource to database
// Returns the resource
module.exports.signup = async (user) => {
  // Generate salt
  const salt = await bcrypt.genSalt();

  // Set user password to hashed password
  // Hash user password and attach salt
  user.password = await bcrypt.hash(user.password, salt);

  return await User.create(user);
};

// Check if resource credentials is correct
module.exports.login = async (email, password) => {
  // Find user email
  const user = await User.findOne({ email });
  // If user exists
  if (user) {
    // Compare the entered password and the hashed password
    const authenticatedUser = await bcrypt.compare(password, user.password);
    
    // If password is correct
    if (authenticatedUser) {
      
      // Create token containing payload user id/role
      // Return token 
      const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
      return token;
    }
    // If password is NOT correct, throw error
    throw Error("Incorrect password");
  }
  // If user doesn't exist, throw error
  throw Error("Incorrect email");
};

module.exports.get = async (id) => {
  return (await User.findById(id).exec())._doc;
};

// Find all resources
// Return all resources
module.exports.getAll = async () => {
  return await User.find({});
};

// Delete all resources
// Return the resource
module.exports.clear = async () => {
  return await User.deleteMany({});
};
