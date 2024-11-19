"use server";

import { FilterQuery, SortOrder } from "mongoose";
import { revalidatePath } from "next/cache";

import Community from "../models/community.model";
import Thread from "../models/thread.model";
import User from "../models/user.model";



export async function fetchNumber(imagePath:any,) {
  try {

  
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}



