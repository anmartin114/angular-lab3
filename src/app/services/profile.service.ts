import { Injectable } from "@angular/core";
import { UserProfile } from "../interfaces/user-profile";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  private profile: UserProfile = {
    name: "alicia",
    contact: "12345",
    bio: "cats are cool"
  };

  constructor() {}

  getUserProfile() {
    return this.profile;
  }

  setUserProfile(newInfo) {
    this.profile = newInfo;
  }
}
