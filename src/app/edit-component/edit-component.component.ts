import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProfileService } from "../services/profile.service";
import { UserProfile } from "../interfaces/user-profile";

@Component({
  selector: "app-edit-component",
  templateUrl: "./edit-component.component.html",
  styleUrls: ["./edit-component.component.css"]
})
export class EditComponentComponent implements OnInit {
  profile: UserProfile;

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit() {
    this.profile = this.profileService.getUserProfile();
  }

  formSubmit() {
    this.profileService.setUserProfile(this.profile);
    this.router.navigate(["profile-component"]);
  }
}
