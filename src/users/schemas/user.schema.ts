import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import  { Document, Types } from 'mongoose';

// export type UserDocument = User & Document;
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
  _id: Types.ObjectId;
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

	@Prop()
  refreshToken: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
