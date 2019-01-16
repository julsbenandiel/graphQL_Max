import bcrypt from 'bcryptjs'
import  User from '../../models/user'
import Product from '../../models/product'

export default {
  Query: {
    users: async () => {
      const users = await User.find({});
      return users.map(user => {
        return { ...user._doc, _id: user.id }
        console.log(user);
      })
    },
    user: async (parent, { id }) => {
      const foundUser = await User.findById(id)
      return { ...foundUser._doc, _id: foundUser.id };
    }
  },
  Mutation: {
    createUser: async (parent, args) => {
      try {
          const existingUser = await User.findOne({ email: args.email });
          if (existingUser) {
            throw new Error('User exists already.');
          }

          const hanshedPassword = await bcrypt.hash(args.password, 10);

          const user = new User({
            email: args.email,
            name: args.name,
            password: hanshedPassword
          });

          const result = await user.save();
          return { ...result._doc, _id: result.id };

        } catch (err) {
          throw err;
        }
     },
     createProduct: async (_, args) => {

          const newProduct = new Product({
              name: args.productInput.name,
              location: args.productInput.location,
              price: args.productInput.price,
              owner: '5c3f0398463bfb4634b87a93'
          })
          const createdProduct = await newProduct.save();
          return { ...createdProduct._doc, _id: createdProduct.id };

          const findUser = await User.findById('5c3f0398463bfb4634b87a93');
          if(!findUser) {
            throw new Error('no user found');
          }
          return findUser.products.push('newProduct');
          return findUser.save()
     }
   }
};
